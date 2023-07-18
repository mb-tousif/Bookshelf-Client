/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { TBook } from "../@types/AllTypes";
import { useGetAllBooksQuery } from "../Redux/features/book/bookApiEndpoints";
import Card from "../components/All-Books/Card";
import Loader from "../components/UI/Loader";
import { Link } from "react-router-dom";

export default function AllBook() {
  const [searchText, setSearchText] = useState<string>("")
  const [filterOptions, setFilterOptions] = useState<string>('');
  const { data, isLoading } = useGetAllBooksQuery({searchText, filterOptions}, { refetchOnMountOrArgChange: true })
  if (isLoading === true) {
    return <Loader />
  }
  

  return (
    <div className="bg-gradient-to-b text-gray-50 from-[#c1dfc4] to-[#ADCDED] min-h-70vh ">
      <div className="pt-4 flex justify-center">
        <input
          type="search"
          className="h-10 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl w-8/12"
          placeholder="Search by title, author, or genre"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
        <div className="flex justify-center">
        <div className="p-5 mx-auto">
      <select
        className="h-8 w-full m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl"
        value={filterOptions}
        onChange={(e) => setFilterOptions(e.target.value)}
      >
        <option value="">Genre</option>
        <option value="Programming Book">Programming Book</option>
        <option value="Mystery Novel">Mystery Novel</option>
        <option value="Romantic Novel">Romantic Novel</option>
        <option value="Crime Novel">Crime Novel</option>
        <option value="History Novel">History Novel</option>
        <option value="Economics book">Economics book</option>
      </select>
      <select
        className="h-8 w-full m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl"
        value={filterOptions}
        onChange={(e) => setFilterOptions(e.target.value)}
      >
        <option value="">Published Years</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <div className="flex justify-center mt-4">
      <Link
        to="/addBook"
        className="w-full h-8 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl"
      >
        Add New Books
      </Link>
      </div>
    </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
        data?.data?.map((book: TBook) => (
          <Card key={book._id} book={book}/>
        ))
      }
        </div>
      </div>
  );
}
