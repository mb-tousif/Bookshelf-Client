import { Link } from "react-router-dom";
import { TBook } from "../../@types/AllTypes";

export default function Card( {book} : {book:TBook}) {

  return (
    <Link to={`/bookDetail/${book._id}`}>
    <div className="p-2 m-2 hover:translate-x-4 ease-in-out duration-500 bg-white shadow-lg rounded-2xl">
      <img
        src={book.imgUrl}
        alt="Book"
        className="w-full hover:scale-110 ease-in-out duration-500 p-4 m-auto h-36"
      />
      <div className="p-4 text-xs text-center mx-auto my-auto h-36 bg-[#28979f] rounded-lg">
        <p className="md:text-xl font-bold mt-4 text-white">Tittle: {book.title}</p>
        <p className="text-gray-50">Author: {book.author}</p>
        <p className="text-gray-50">Genre: {book.genre}`</p>
        <p className="text-white">Published: {book.publicationYear}</p>
      </div>
    </div>
    </Link>
  );
}
