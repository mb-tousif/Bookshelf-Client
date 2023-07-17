/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TBook } from "../@types/AllTypes";
import { useCreateBookMutation } from "../Redux/features/book/bookApiEndpoints";
import Loader from "../components/UI/Loader";
import { ToastBar } from "react-hot-toast";

export default function AddBook() {
  const [createBook, res] = useCreateBookMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TBook>();

  const onSubmit: SubmitHandler<TBook> = (data: TBook) => {
    console.log(data);
    createBook({
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationYear: data.publicationYear,
      reviews: {
        comment: data.reviews,
      },
    });
  };
  console.log(res);
  if (res.isLoading) {
    return <Loader />;
  }

  if (res.isError) {
    return <ToastBar message="Error" />;
  }

  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg sm:w-3/5 bg-[#2d8dc0] max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-50">
          Please Sign In Here
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Enter Title"
            />
            {errors.title?.type === "required" && (
              <span className="text-red-600">{errors.title.message}</span>
            )}
          </div>
          <div className="mb-6">
            <input
              type="text"
              {...register("author", {
                required: {
                  value: true,
                  message: "Author is required",
                },
                minLength: {
                  value: 3,
                  message: "error message",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Enter Book Author"
            />
            {errors.author?.type === "required" && (
              <span className="text-red-600">{errors.author.message}</span>
            )}
          </div>
          <div className="mb-6">
            <label className="inline-block mb-2 mr-2 text-gray-700">
              Book Genre
            </label>
            <select
              className={`w-full h-10 text-center bg-[#868d05] text-gray-50 rounded-lg text-xl ${
                errors.genre &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("genre", { required: true })}
            >
              <option value="">--Select Genre--</option>
              <option value="Programming Book">Programming Book</option>
              <option value="Mystery Novel">Mystery Novel</option>
              <option value="Romantic Novel">Romantic Novel</option>
              <option value="Crime Novel">Crime Novel</option>
              <option value="History Novel">History Novel</option>
              <option value="Economics book">Economics book</option>
            </select>
            {errors.genre && (
              <p className="text-rose-600 text-center">Genre is required.</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="number"
              {...register("publicationYear", {
                required: {
                  value: true,
                  message: "Publish year is required",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Enter publish year"
            />
            {errors.publicationYear?.type === "required" && (
              <span className="text-red-600">
                {errors.publicationYear.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <input
              type="text"
              {...register("reviews", {
                required: {
                  value: true,
                  message: "Review is required",
                },
                minLength: {
                  value: 3,
                  message: "error message",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Enter your review"
            />
            {errors.reviews?.type === "required" && (
              <span className="text-red-600">{errors.reviews.message}</span>
            )}
            {errors.reviews?.type === "minLength" && (
              <span className="text-red-600">{errors.reviews.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] rounded transition ease-in-out m-0 placeholder-teal-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
