/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default function CardHome({ book }) {
  return (
    <div className="p-2 m-2 hover:translate-x-4 ease-in-out duration-500 bg-white shadow-lg rounded-2xl">
      <img src={book.imgUrl} alt="Book" className="w-full hover:scale-110 ease-in-out duration-500 p-2 m-auto h-40" />
      <div className="p-4 text-center mx-auto my-auto bg-[#28979f] rounded-lg">
        <p className="text-xl font-bold mt-1 text-white ">{book.title}</p>
        <p className="text-xs text-gray-50">{book.genre}</p>
        <Link to={`/bookDetail/${book._id}`}>
        <button className="text-base text-gray-50">Details</button>  
          </Link>
      </div>
    </div>
  );
}
