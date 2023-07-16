/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TBook } from "../@types/AllTypes";
import { useGetTenBooksQuery } from "../Redux/features/book/bookApiEndpoints";
import Card from "../components/All-Books/Card";
import FilterSection from "../components/All-Books/FilterSection";
import Loader from "../components/UI/Loader";

export default function AllBook() {
  const { data, isLoading} = useGetTenBooksQuery(undefined)
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
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
        <div className="flex justify-center">
        <FilterSection />
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
