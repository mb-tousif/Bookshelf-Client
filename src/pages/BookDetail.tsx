import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSingleBookQuery } from "../Redux/features/book/bookApiEndpoints";
import Loader from "../components/UI/Loader";
import Modal from "../components/Book-Detail/Modal";
import { TReview } from "../@types/AllTypes";
import AddReview from "../components/Book-Detail/AddReview";

export default function BookDetail() {
  const [modal, setModal] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useSingleBookQuery(id);
  if (isLoading === true) {
    return <Loader />;
  }

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal === true) {
    return <Modal setModal={setModal} id={id as string} />;
  };

  const toggleReviewModal = () => {
    setReviewModal(!reviewModal);
  };
  if (reviewModal === true) {
    return <AddReview setReviewModal={setReviewModal} id={id as string} />;
  }
  return (
    <div className="bg-gradient-to-b p-2 from-[#c1dfc4] to-[#ADCDED] min-h-70vh">
      <div className="w-full max-w-md p-3 mx-auto rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div
            className="h-[236px]"
            style={{
              backgroundImage: `url(${data?.data?.imgUrl})`,
              backgroundSize: "fill",
              backgroundPosition: "center",
              borderRadius: "20px",
            }}
          ></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {data?.data?.title}
            </p>
            <p className="text-[#3C3C4399] font-bold text-[18px] mr-2">
              Author: {data?.data?.author}
            </p>
            <p className="text-[17px] font-bold text-[#0FB478]">
              Genre: {data?.data?.genre}
            </p>
            <p className="font-normal text-gray-700 text-[18px] leading-7 mb-1">
              Published: {data?.data?.publicationYear}
            </p>
            <Link to={`/editBook/${id}`}>
              <button className="h-10 mb-3 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                Edit Book
              </button>
            </Link>
            <button
              onClick={() => toggleModal()}
              className="h-10 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-600"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={()=>toggleReviewModal()}
          className="h-10 md:w-4/12 w-8/12 px-5 mt-4 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-green-600"
        >
          Add Book Review
        </button>
      </div>
      <div className="mt-6 p-4 text-center">
        <h1 className="text-lg font-bold">All reviews of this book</h1>
      {data?.data?.reviews.map((review: TReview) => (
        <p
          key={review._id}
          className="text-[#323238] m-2 px-4 font-[18px]"
        >{review.comment}
        </p>
      ))}
      </div>
    </div>
  );
}
