import { Link } from "react-router-dom";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

type TCard = {
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: string;
};

const SingleCard = ({ _id, image, title, category, quantity }: TCard) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="col-span-12 md:col-span-6 lg:col-span-4"
    >
      <Card className="h-[540px] hover:shadow-lg dark:bg-slate-700 dark:bg-opacity-80">
        <CardHeader>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={image}
            alt="food Image"
            className="h-80 object-cover rounded-md"
          />
          <CardTitle className="text-[32px]">{title}</CardTitle>
          <p className="text-md">
            Category:{" "}
            <span className="text-yellow-500 text-xl font-semibold">
              {category}
            </span>
          </p>
          <p className="text-md">
            Available Quantity:{" "}
            <span className="text-cyan-900 dark:text-cyan-50 font-semibold text-xl">
              {quantity}
            </span>
          </p>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Link
            to={`/supplies/${_id}`}
            className="w-[100px] bg-slate-400 text-center py-2 rounded-md font-semibold hover:bg-slate-600 hover:text-white"
          >
            Details
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SingleCard;
