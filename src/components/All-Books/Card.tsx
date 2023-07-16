/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import toast, { Toaster } from "react-hot-toast";

export default function Card({ book }) {
  const notify = () =>
    toast("Here is your toast.", {
      icon: "👏",
      style: {
        background: "#344c4d",
        color: "#fff",
      },
    });
  return (
    <div className="p-2 m-2 hover:translate-x-4 ease-in-out duration-500 bg-white shadow-lg rounded-2xl">
      <img
        src={book.imgUrl}
        alt="Book"
        className="w-full hover:scale-110 ease-in-out duration-500 p-4 m-auto h-36"
      />
      <div className="p-4 text-xs text-center mx-auto my-auto h-32 bg-[#28979f] rounded-lg">
        <p className="md:text-xl font-bold mt-4 text-white ">{book.title}</p>
        <p className="text-gray-50">{book.genre}</p>
      </div>
      <div className="mx-auto">
        <p className="text-white">{book.publicationYear}</p>
        <Toaster position="top-right" />
      </div>
    </div>
  );
}
