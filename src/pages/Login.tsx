import {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useLoginUserMutation } from "../Redux/features/user/userApiEndpoints";
import Loader from "../components/UI/Loader";
import { TLogin } from "../@types/AllTypes";
import { setCredentials } from "../Redux/features/user/userSlice";
import { useAppDispatch } from "../Redux/hooks";

export default function Login(): JSX.Element  {
  const { register, formState: { errors }, handleSubmit } = useForm<TLogin>();
  const [showPassword, setShowPassword] = useState(true);
  const [ loginUser, { isError, isSuccess, isLoading, data }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/allBooks";
  const onSubmit: SubmitHandler<TLogin> = (data) => {
    loginUser(data);
  }
  if (isLoading === true) {
    return <Loader />;
  }
  const payload = data?.data as { accessToken: string};
  console.log(payload);
  
  if (isSuccess) {
    dispatch(setCredentials(payload as { accessToken: string}));
    localStorage.setItem("token", payload.accessToken);
    navigate(from, { replace: true });
  }

  if (isError) {
    navigate("/login");
  }
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg sm:w-3/5 bg-white max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-800">
          Please Login Here
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
          {showPassword ?
          <div className="relative mb-6">
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required!" }
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            <MdOutlineVisibilityOff
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-slate-700 right-0 top-[6px] mr-4 cursor-pointer"
              size={28}
            />
          </div>:
          <div className="relative mb-6">
            <input
              type="text"
              {...register("password", {
                required: { value: true, message: "Password is required!" },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            <MdOutlineVisibility
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-slate-700 right-0 top-[6px] mr-4 cursor-pointer"
              size={28}
            />
          </div>
          }
          <div className="mb-2">
            <Link to={"#/"}>Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] rounded transition ease-in-out m-0 placeholder-teal-900"
          >
            Login 🥤
          </button>
        </form>
        <div className="h-0.5 mb-2 mt-6 bg-slate-600"></div>
        <div className="mb-2 text-center text-lg">
          New to here ? <Link to={"/register"} className="text-[#b26014] animate-pulse hover:text-rose-600">Please Sign In.</Link>
        </div>
      </div>
    </div>
  );
}
