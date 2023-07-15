/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

type FormValues = {
  address: string;
  email: string;
  password: string;
};

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(true);
  const [loader, setLoader] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg sm:w-3/5 bg-white max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-800">
          Please Sign In Here
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter valid email address",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Email address"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          {showPassword ? (
            <div className="relative mb-6">
              <input
                type="password"
                {...register("password", {
                  required: { value: true, message: "Password is required!" },
                  pattern: {
                    value:
                      /^(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d])(.{6,})$/,
                    message:
                      "Enter strong password with minLength six,minNumbers one,minUppercase one, minSymbols one. ",
                  },
                })}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
              <MdOutlineVisibilityOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-slate-700 right-0 top-[6px] mr-4 cursor-pointer"
                size={28}
              />
            </div>
          ) : (
            <div className="relative mb-6">
              <input
                type="text"
                {...register("password", {
                  required: { value: true, message: "Password is required!" },
                  pattern: {
                    value:
                      /^(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d])(.{6,})$/,
                    message:
                      "Enter strong password with minLength six,minNumbers one,minUppercase one, minSymbols one. ",
                  },
                })}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
              <MdOutlineVisibility
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-slate-700 right-0 top-[6px] mr-4 cursor-pointer"
                size={28}
              />
            </div>
          )}
          <div className="mb-6">
            <input
              type="text"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
                minLength: {
                  value: 3,
                  message: "error message",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Enter your Address"
            />
            {errors.address?.type === "required" && (
              <span className="text-red-600">{errors.address.message}</span>
            )}
            {errors.address?.type === "minLength" && (
              <span className="text-red-600">{errors.address.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] rounded transition ease-in-out m-0 placeholder-teal-900"
          >
            Sign up 🥤
          </button>
        </form>
        <div className="h-0.5 mb-2 mt-6 bg-slate-600"></div>
        <div className="mb-2 text-center text-lg">
          Already Sign up ?{" "}
          <Link
            to={"/login"}
            className="text-[#b26014] animate-pulse hover:text-rose-600"
          >
            Login now{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
