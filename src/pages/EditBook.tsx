import { Toaster } from "react-hot-toast";
import { TBook } from "../@types/AllTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSingleBookQuery, useUpdateBookMutation } from "../Redux/features/book/bookApiEndpoints";
import Loader from "../components/UI/Loader";

export default function EditBook() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useSingleBookQuery(id);
  const [updateBook, res] = useUpdateBookMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TBook>();
  const onSubmit: SubmitHandler<TBook> = (data: TBook) => {
    updateBook({
      id: id,
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationYear: data.publicationYear,
      reviews: {
        comment: data.reviews,
      },
    })
  };
  console.log(res);
  if (isLoading || res.isLoading) {
    return <Loader />;
  }
  if(res.isSuccess === true){
    return alert("Book is Edited! 👏 👏 👏")
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
              placeholder={data?.data?.title}
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
              placeholder={data?.data?.author}
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
              <option value="">{data?.data?.genre}</option>
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
              placeholder={data?.data?.publicationYear}
            />
            {errors.publicationYear?.type === "required" && (
              <span className="text-red-600">
                {errors.publicationYear.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <textarea
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
              rows={3}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder={data?.data?.reviews[0].comment}
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
            <Toaster />
          </button>
        </form>
      </div>
    </div>
  )
}
