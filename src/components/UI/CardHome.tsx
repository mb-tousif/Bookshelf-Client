import bookImg from "../../assets/reading.svg";

export default function CardHome() {
  return (
    <div className="flex flex-wrap">
      <div className="w-64 p-2 m-auto bg-white shadow-lg rounded-2xl">
        <img
          src={bookImg}
          alt="adidas"
          className="w-56 p-4 m-auto h-36"
        />
        <div className="p-4 m-3 bg-[#2a51cf] rounded-lg">
          <p className="text-xl font-bold text-white ">Adidas</p>
          <p className="text-xs text-gray-50">Live your dream</p>
          <div className="flex items-center justify-between ">
            <p className="text-white">$98.00</p>
            <button
              type="button"
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
          </div>
        </div>
      </div>
    </div>
  );
}
