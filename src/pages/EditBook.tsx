import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast/headless";

export default function EditBook() {
  const notify = () =>
  toast("Book is Edited!", {
    icon: "👏",
    style: {
      background: "#344c4d",
      color: "#fff",
    },
  });
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    notify();
  };
  return (
    <div className="bg-gradient-to-b p-3 from-[#c1dfc4] to-[#ADCDED] min-h-70vh text-gray-50"><div className="w-full md:w-6/12 md:max-w-full mx-auto">
    <div className="p-6 border border-gray-300 sm:rounded-md">
      <form>
        <div className="flex">
        <label className="m-3">
          <span className="text-[#041714cc]">Tittle</span>
          <input name="name" type="text" className="block w-full h-8 m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl" placeholder="Joe Blogs"/>
        </label>
        <label className="m-3">
          <span className="text-[#041714cc]">Author</span>
          <input name="name" type="text" className="block w-full h-8 m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl" placeholder="Joe Blogs"/>
        </label>
        </div>
        <div className="flex">
        <label className="m-3">
          <span className="text-[#041714cc]">Genre</span>
          <input name="name" type="text" className="block w-full h-8 m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl" placeholder="Joe Blogs"/>
        </label>
        <label className="m-3">
          <span className="text-[#041714cc]">Published</span>
          <input name="name" type="text" className="block w-full h-8 m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl" placeholder="Joe Blogs"/>
        </label>
        </div>
        <label className="block mb-6">
          <span className="text-[#041714cc]">Book Image</span>
          <input name="screenshot" type="file" className="block w-full h-8 m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl"/>
        </label>
        <label className="block mb-6">
          <span className="text-[#041714cc]">Book Description</span>
          <textarea name="description" className="block text-center placeholder:text-center placeholder:pt-3 w-full bg-[#1f5f54cc] rounded-xl" rows={3} placeholder="Please add book description"></textarea>
        </label>
        <div className="mb-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="h-10 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800" >Update Book</button>
            <Toaster />
        </div>
        <div>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}
