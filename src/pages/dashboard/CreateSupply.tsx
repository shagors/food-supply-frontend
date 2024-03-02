import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePostSuppliesMutation } from "@/redux/features/supplies/suppliesApi";
import { toast } from "sonner";
import { motion } from "framer-motion";

const validationSchema = z.object({
  image: z.string().min(1, { message: "Image is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  quantity: z.string().min(1, { message: "Quantity must be greater than 0" }),
  description: z.string().min(1, { message: "Description is required" }),
});

type FormData = z.infer<typeof validationSchema>;

const CreateSupply = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [addSupply] = usePostSuppliesMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);
    addSupply(data);
    toast.success("Data successfully uploaded", {
      duration: 2000,
    });
    reset();
    navigate("/dashboard/supplies");
  };

  return (
    <div className="bg-slate-300 bg-opacity-20 h-screen pt-12">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto p-6 rounded-md shadow-lg"
      >
        <motion.h1
          whileHover={{ scale: 1.04 }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-4xl text-center font-light mb-7 shadow-xl p-4 rounded-b-lg"
        >
          Add New Supply
        </motion.h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Image field */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="image"
                  placeholder="Enter image URL"
                  className={`w-full px-3 py-2 border ${
                    errors.image ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Category field */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category
            </label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="category"
                  placeholder="Enter category"
                  className={`w-full px-3 py-2 border ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Title field */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  className={`w-full px-3 py-2 border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Quantity field */}
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantity
            </label>
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="quantity"
                  placeholder="Enter quantity"
                  className={`w-full px-3 py-2 border ${
                    errors.quantity ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>

          {/* Description field */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="description"
                  placeholder="Enter description"
                  rows={4}
                  className={`w-full px-3 py-2 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className=" flex justify-center items-center">
            <button
              type="submit"
              className="w-2/4 bg-slate-400 bg-opacity-85 text-black font-medium py-2 px-4 rounded-md hover:bg-slate-600 hover:text-white focus:outline-none transition-all"
            >
              Create Supply
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateSupply;
