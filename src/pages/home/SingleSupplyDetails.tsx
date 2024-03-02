import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";
import { useGetSuppliesByIdQuery } from "@/redux/features/supplies/suppliesApi";
import { useParams } from "react-router-dom";
import EditModal from "../dashboard/EditModal";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const SingleSupplyDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSuppliesByIdQuery(id);
  const supply = data?.data;

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
    <div className="w-full max-w-7xl mx-auto mt-[97px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
        className="my-20"
      >
        <div className="">
          <img
            src={supply.image}
            alt="Image"
            className="w-3/4 mx-auto h-[520px] rounded-md"
          />
        </div>
        <div className="px-24 mt-5">
          <h2 className="text-4xl">
            Food Name :{" "}
            <span className="text-gray-500 font-semibold">{supply.title}</span>
          </h2>
          <h3 className="my-4 text-2xl">
            Category :{" "}
            <span className="text-gray-500 font-semibold">
              {supply.category}
            </span>
          </h3>
          <h3 className="my-4 text-2xl">
            In Stock :{" "}
            <span className="text-gray-500 font-semibold">
              {supply.quantity}
            </span>
          </h3>
          <h3 className="text-2xl mb-3">Product Details: </h3>
          <p className="text-gray-500 text-sm font-light">
            {supply.description}
          </p>
        </div>
        <div className="w-full text-end">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mr-16 mb-3 text-2xl font-semibold animate-blink-infinite text-pink-700 transition-all"
          >
            Add to supply click below
          </motion.p>
          <p className="mr-[180px] flex items-center justify-end">
            <EditModal {...supply} />
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl mb-3">User Reviews: </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleSupplyDetails;
