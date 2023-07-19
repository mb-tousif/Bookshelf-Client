/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { TBook } from "../@types/AllTypes";
import { useGetTenBooksQuery } from "../Redux/features/book/bookApiEndpoints";
import CardHome from "../components/UI/CardHome";
import Loader from "../components/UI/Loader";

export default function Home() {
  const { data, isLoading} = useGetTenBooksQuery(undefined)
  if (isLoading === true) {
    return <Loader />
  }
  console.log(data);
  return (
    <div className='min-h-70vh bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
      {
        data?.data?.map((book: TBook) => (
          <CardHome key={book._id} book={book} />
        ))
      }
    </div>
  )
}
