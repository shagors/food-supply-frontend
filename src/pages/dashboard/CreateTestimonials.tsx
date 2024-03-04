import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useAddTestimonialMutation } from "@/redux/features/testimonials/testimonialApi";

const validationSchema = z.object({
  image: z.string().min(1, { message: "Image is required" }),
  buyerName: z.string().min(1, { message: "Category is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

type FormData = z.infer<typeof validationSchema>;

const CreateTestimonials = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [addTestimonials] = useAddTestimonialMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);
    addTestimonials(data);
    toast.success("Data successfully uploaded", {
      duration: 2000,
    });
    reset();
    navigate("/dashboard/testimonials");
  };

  return (
    <div className="bg-slate-300 dark:bg-slate-700 bg-opacity-20 h-screen pt-12">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto p-6 rounded-md shadow-lg dark:shadow-2xl"
      >
        <motion.h1
          whileHover={{ scale: 1.04 }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-4xl text-center font-light mb-7 shadow-xl p-4 rounded-b-lg dark:text-white"
        >
          Buyer Testimonials
        </motion.h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Image field */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 dark:text-slate-200 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
            >
              Name
            </label>
            <Controller
              name="buyerName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="category"
                  placeholder="Enter Your Name"
                  className={`w-full px-3 py-2 border ${
                    errors.buyerName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.buyerName && (
              <p className="text-red-500 text-sm">{errors.buyerName.message}</p>
            )}
          </div>

          {/* Title field */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
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

          {/* Description field */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
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
              Give Feedback
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateTestimonials;
