import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useAddVolunteerMutation } from "@/redux/features/volunteers/volunteerApi";

const validationSchema = z.object({
  image: z.string().min(1, { message: "Image is required" }),
  name: z.string().min(1, { message: "Category is required" }),
  email: z.string().min(1, { message: "Title is required" }),
  phone: z.string().min(1, { message: "Quantity must be greater than 0" }),
  location: z.string().min(1, { message: "Description is required" }),
});

type FormData = z.infer<typeof validationSchema>;

const VolunteerForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [addVolunteer] = useAddVolunteerMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    addVolunteer(data);
    toast.success("Data successfully uploaded", {
      duration: 2000,
    });
    reset();
    navigate("/volunteer");
  };

  return (
    <div className="bg-slate-300 dark:bg-slate-700 bg-opacity-20 h-full pt-32">
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
          Volunteer Registration Form
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

          {/* Name field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
            >
              Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="category"
                  placeholder="Enter category"
                  className={`w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Title field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className={`w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Quantity field */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
            >
              Phone
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="phone"
                  placeholder="Enter phone"
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Description field */}
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
            >
              Location
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="location"
                  placeholder="Enter location"
                  rows={4}
                  className={`w-full px-3 py-2 border ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
              )}
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className=" flex justify-center items-center gap-5">
            <button
              type="submit"
              className="w-1/4 bg-slate-400 bg-opacity-85 text-black font-medium py-2 px-4 rounded-md hover:bg-slate-600 hover:text-white focus:outline-none transition-all"
            >
              Submit
            </button>
            <Link
              to="/volunteer"
              className="w-1/4 text-black font-medium py-2 px-4 rounded-md hover:bg-slate-600 hover:text-white focus:outline-none transition-all border text-center bg-slate-200"
            >
              Back
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default VolunteerForm;
