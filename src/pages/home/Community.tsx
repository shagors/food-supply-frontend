import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "@/redux/features/community/communityApi";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const validationSchema = z.object({
  name: z.string().min(1, { message: "Category is required" }),
  email: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

type FormData = z.infer<typeof validationSchema>;

type TItemProps = {
  _id: string;
  name: string;
  email: string;
  description: string;
  createdAt: string;
};

const Community = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [addComment] = useAddCommentMutation();

  const { data, isLoading, isError } = useGetCommentsQuery(undefined);

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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);
    addComment(data);
    toast.success("Your comment successfully uploaded", {
      duration: 2000,
    });
    reset();
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-[115px] h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
        className="my-20"
      >
        <SectionTitle heading="Our Community" />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-8">
              {data?.data.map((item: TItemProps) => (
                <Card
                  className="h-full hover:shadow-lg dark:bg-slate-700 dark:bg-opacity-80 col-span-12 md:col-span-6 lg:col-span-4"
                  key={item._id}
                >
                  <CardHeader>
                    <CardTitle className="text-[32px]">{item.name}</CardTitle>
                    <p className="text-md">{item.createdAt}</p>
                    <p className="text-md">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* form */}
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">Leave your Comment</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                      id="name"
                      placeholder="Enter Name"
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

              {/* Description field */}
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2 dark:text-slate-200"
                >
                  Leave Comment
                </label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="description"
                      placeholder="Enter Comment"
                      rows={4}
                      className={`w-full px-3 py-2 border ${
                        errors.description
                          ? "border-red-500"
                          : "border-gray-300"
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
              <div className=" flex justify-center items-center gap-5">
                <button
                  type="submit"
                  className="w-3/4 bg-slate-400 bg-opacity-85 text-black font-medium py-2 px-4 rounded-md hover:bg-slate-600 hover:text-white focus:outline-none transition-all"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Community;
