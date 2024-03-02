import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="my-20"
    >
      <SectionTitle heading="Frequently Asked Questions" />
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <h3 className="text-xl font-semibold mb-2">
            <span className="text-red-600 text-xl font-light">~</span> Is Food
            Supply really fresh each day?
          </h3>
          <p className="text-md font-thin text-slate-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <h3 className="text-xl font-semibold mb-2">
            <span className="text-red-600 text-xl font-light">~</span> Do you
            collect everyday's product from the farm?
          </h3>
          <p className="text-md font-thin text-slate-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <h3 className="text-xl font-semibold mb-2">
            <span className="text-red-600 text-xl font-light">~</span> Can I
            order your products online?
          </h3>
          <p className="text-md font-thin text-slate-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <h3 className="text-xl font-semibold mb-2">
            <span className="text-red-600 text-xl font-light">~</span> When are
            you opening a shop near me?
          </h3>
          <p className="text-md font-thin text-slate-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
