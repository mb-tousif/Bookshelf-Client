import React from "react";
import { Link } from "react-router-dom";

export default function FilterSection() {
  return (
    <div className="p-5 mx-auto">
      <select
        className="h-8 w-full m-2 border-none text-xl text-center bg-[#1f5f54cc] rounded-xl"
        // value={selectedGenre}
        // onChange={(e) => setSelectedGenre(e.target.value)}
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
        // value={selectedYear}
        // onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">All Years</option>
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
  );
}
