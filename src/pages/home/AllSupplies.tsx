import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import SingleCard from "@/components/shared/SingleCard";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

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

const AllSupplies = () => {
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
      <p className="text-4xl text-red-500 font-thin text-center mt-36">
        Something went wrong data fetching try again later !!
      </p>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-[115px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
        className="my-20"
      >
        <SectionTitle heading="All Supplies List" />
        <div className="grid grid-cols-12 gap-7">
          {data?.data?.map((item: TItemProps) => (
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
      </motion.div>
    </div>
  );
};

export default AllSupplies;
