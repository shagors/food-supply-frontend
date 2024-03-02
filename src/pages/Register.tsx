import { useForm, type FieldValues } from "react-hook-form";
import Signup from "../assets/signup.jpg";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm();

  const [registerUser, { isLoading }] = useRegisterMutation();

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-44">
        <ClipLoader cssOverride={override} color="#36d7b7" size={60} />
      </p>
    );
  }

  const onSubmit = async (data: FieldValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await registerUser(data);
      // console.log(response);

      if ("error" in response) {
        toast.error(`Registration failed Please try again`, {
          duration: 2000,
        });
      } else {
        toast.success("Registration successfully", {
          duration: 2000,
        });
        // reset();
        navigate("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred during Registration", {
        duration: 2000,
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto min-h-screen flex items-center justify-center "
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block"
      >
        <img src={Signup} alt="Sign Up" className="w-[600px] h-[480px] pl-10" />
      </motion.div>
      <motion.form
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 w-96 mx-auto"
      >
        <h3 className="text-3xl mb-6 text-black font-semibold">
          Registration Form
        </h3>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          placeholder="Type your Name"
          className="px-4 py-2 rounded border"
        />
        {errors.name && (
          <p className="text-red-500">{`${errors.name.message}`}</p>
        )}

        <input
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
          placeholder="Type your Email"
          className="px-4 py-2 rounded border"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded border"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-1/2 bg-blue-400 font-semibold disabled:bg-gray-500 py-2 rounded hover:bg-blue-300"
        >
          Submit
        </button>
        <p className="mt-3 text-blue-500">
          If you have already account. Please{" "}
          <Link to="/login" className="text-blue-950 font-bold">
            Login
          </Link>
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Register;
