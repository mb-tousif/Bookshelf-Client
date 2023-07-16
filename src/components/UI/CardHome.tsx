/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default function CardHome({ book }) {
  return (
    <div className="p-2 m-2 bg-white shadow-lg rounded-2xl">
      <img src={book.imgUrl} alt="Book" className="w-full p-4 m-auto h-36" />
      <div className="p-4 text-center mx-auto my-auto h-32 bg-[#28979f] rounded-lg">
        <p className="text-xl font-bold mt-4 text-white ">{book.title}</p>
        <p className="text-xs text-gray-50">{book.genre}</p>
      </div>
    </div>
  );
}
