import { Link } from "react-router-dom";
import { TBook } from "../../@types/AllTypes";
export default function CardHome({ book }: { book:TBook}) {
  return (
    <div className="p-2 m-2 hover:translate-x-4 ease-in-out duration-500 bg-[#323238a9] shadow-lg rounded-2xl">
      <img src={book.imgUrl} alt="Book" className="w-full hover:scale-110 ease-in-out duration-500 p-2 m-auto rounded-2xl h-40" />
      <div className="p-4 text-center mx-auto my-auto h-36 bg-[#28979f] rounded-lg">
        <p className="text-xl font-bold mt-1 text-white ">{book.title}</p>
        <p className="text-xs mb-2 text-gray-50">Genre: {book.genre}</p>
        <Link to={`/bookDetail/${book._id}`}>
        <button className="h-10 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-green-600" >Book Details</button> 
          </Link>
      </div>
    </div>
  );
}
