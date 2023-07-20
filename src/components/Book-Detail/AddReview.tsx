import { usePostReviewMutation } from "../../Redux/features/book/bookApiEndpoints";
import { useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import { toast } from "react-toastify";
import { TReview } from "../../@types/AllTypes";
import { useForm, SubmitHandler } from "react-hook-form";

export default function AddReview({ setReviewModal, id }: { setReviewModal: any; id: string }) {
  const [ postReviewMutation, { isLoading,isSuccess }]  = usePostReviewMutation()
  const navigate = useNavigate();
  const handleCancel = () => {
    setReviewModal(false) as boolean;
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TReview>();
  if(isLoading === true) return <Loader />
  const onSubmit: SubmitHandler<TReview> = (data) => {
    postComment(id, data);
  };
  const postComment =async (id: string, data:TReview) => {
    try {
      await postReviewMutation({ id, data });
      if(isSuccess === true){
        toast.success("Book Successfully Deleted! 👏 👏 👏")
        navigate("/");
      }
    } catch (error) {
      toast.error(`Oops! There is an ${error} 😞`);
    }
    setReviewModal(false);
  };
  return (
    <div className="flex bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-opacity-50 min-h-70vh justify-center items-center top-0 right-0 bottom-0 left-0">
      <div className="bg-[#4b614d] px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-gray-50">
          Write your comment here
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4">
        <button type="submit" className="bg-indigo-500 px-7 py-2 ml-2 rounded-md mr-2 text-md text-white font-semibold">
          Post Comment
        </button>
        <button
          onClick={() => handleCancel()}
          className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
        >
          Go Back
        </button>
        </div>
        <textarea
          {...register("comment", {
            required: {
              value: true,
              message: "Review is required",
            },
          })}
          rows={4}
          placeholder="Enter your review"
          className="bg-[#556473ae] placeholder:text-center w-full px-4 py-2 rounded-md text-md text-gray-50 border-none font-semibold"
        >
        </textarea>
        {errors.comment?.type === "required" && (
          <span className="text-red-600">{errors.comment.message}</span>
        )}
        </form>
      </div>
    </div>
  );
}
