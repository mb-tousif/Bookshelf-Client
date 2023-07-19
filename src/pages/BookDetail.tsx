import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSingleBookQuery } from "../Redux/features/book/bookApiEndpoints";
import Loader from "../components/UI/Loader";
import Modal from "../components/Book-Detail/Modal";
import { TReview } from "../@types/AllTypes";

export default function BookDetail() {
  const [modal, setModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useSingleBookQuery(id); 
  if (isLoading === true) {
    return <Loader />;
  }
  console.log(data);
  
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal===true) {
    return <Modal setModal={setModal} id={id as string} />;
  }
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] min-h-70vh">
      <div className="w-full max-w-md p-3 mx-auto rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div className="h-[236px]"
            style={{
              backgroundImage:`url(${data?.data?.imgUrl})`,
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {data?.data?.title}
            </p>
            <div className="flex flex-row">
              <p className="text-[#3C3C4399] text-[17px] mr-2">
              {data?.data?.author}
              </p>
              <p className="text-[17px] font-bold text-[#0FB478]">{data?.data?.genre}</p>
            </div>
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {data?.data?.publicationYear}
            </p>
            {data?.data?.reviews.map((review:TReview)=><p key={review.index} className="text-[#7C7C80] font-[15px] mt-2 mb-4"> {review.comment}
            </p>)}
            <Link to={`/editBook/${id}`}>
            <button className="h-10 mb-3 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800" >Edit Book</button>
            </Link>
            <button
              onClick={()=>toggleModal()}
            className="h-10 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-600" >Delete Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}
