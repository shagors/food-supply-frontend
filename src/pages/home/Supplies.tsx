import SectionTitle from "@/components/shared/SectionTitle";
import SingleCard from "../../components/shared/SingleCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CSSProperties } from "react";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type TItemProps = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: string;
};

const Supplies = () => {
  const { data, isLoading, isError } = useGetSuppliesQuery(undefined);

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-36">
        <ClipLoader cssOverride={override} color="#36d7b7" size={60} />
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-4xl text-red-500 font-thin text-center mt-16">
        Something went wrong data fetching try again later !!
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="my-20"
    >
      <SectionTitle heading="Our Supplies" />
      <div className="mt-16 grid grid-cols-12 gap-7">
        {data?.data?.slice(0, 6).map((item: TItemProps) => (
          <SingleCard
            key={item._id}
            _id={item._id}
            image={item.image}
            title={item.title}
            category={item.category}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-end items-center">
        <Link
          to="/all-supplies"
          className="w-[120px] font-bold text-2xl flex items-center justify-between hover:border-b-2 hover:border-cyan-900 hover:duration-200 hover:ease-in-out"
        >
          View All
          <ArrowRight className="pl-1 text-cyan-900" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Supplies;
