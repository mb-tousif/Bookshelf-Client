import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/404.svg";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="container min-h-screen z-10 flex items-center justify-between px-6 pt-32 mx-auto md:pt-0"
      style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize: `cover, contain`, backgroundPosition: `center` }}
    >
      <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
        <div className="w-full mb-16 text-center md:mb-8">
          <h1 className="mt-12 font-sans text-3xl font-light text-center text-[#a8a8a8] md:mt-0">
            Sorry, this page isn&#x27;t available
          </h1>
          <div className="sm:p-4 sm:flex justify-center sm:mt-5 text-gray-50">
          <button
            className="w-32 mr-2 mb-2 p-1 bg-[#6c63ff] flex items-center justify-center rounded-md shadow-md focus:outline-none"
            onClick={() => navigate(-1)}
          >
            <i className="bx bx-arrow-back w-5"></i>
            <span>Go Back</span>
          </button>
          <Link
            to="/"
            className="w-32 mb-2 flex items-center p-1 justify-center bg-[#6c63ff] rounded-md shadow-md focus:outline-none"
          >
            <i className="bx bxs-home w-5"></i>
            <span>Go home</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
