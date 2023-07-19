import { useDeleteBookMutation } from "../../Redux/features/book/bookApiEndpoints";
import { useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";

export default function Modal({ setModal, id }: { setModal: any; id: string }) {
  const [deleteBookMutation, { isLoading,isSuccess }]  = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleCancel = () => {
    setModal(false) as boolean;
  };
  if(isLoading === true) return <Loader />
  const handleOk =async (id: string) => {
    try {
      await deleteBookMutation(id);
      if(isSuccess === true){
        alert('Book deleted successfully!');
        navigate("/");
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
    setModal(false);
  };
  return (
    <div className="flex bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-opacity-50 min-h-70vh justify-center items-center top-0 right-0 bottom-0 left-0">
      <div className="bg-[#4b614d] px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-gray-50">
          Do you Want Delete
        </h1>
        <button
          onClick={() => handleCancel()}
          className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
        >
          Cancel
        </button>
        <button onClick={()=> handleOk(id)} className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
          Ok
        </button>
      </div>
    </div>
  );
}
