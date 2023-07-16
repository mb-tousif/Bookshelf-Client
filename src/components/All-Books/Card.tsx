import toast, { Toaster } from 'react-hot-toast'

export default function Card() {
    const notify = () =>
    toast("Here is your toast.", {
      icon: "👏",
      style: {
        background: "#344c4d",
        color: "#fff",
      },
    });
  return (
    
    <div className="flex items-center justify-between ">
    <p className="text-white">{/* {book.publicationYear} */}</p>
    <button
      type="button"
      onClick={notify}
      className="w-10 h-10 text-base font-medium text-white bg-[#344c4d] rounded-full hover:bg-pink-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="mx-auto"
        fill="white"
        viewBox="0 0 1792 1792"
      >
        <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
      </svg>
    </button>
    <Toaster position="top-right" />
  </div>
  )
}
