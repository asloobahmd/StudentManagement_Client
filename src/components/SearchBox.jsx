import { Search } from "lucide-react";
import React from "react";

const SearchBox = ({ search }) => {
  return (
    <div className="w-full md:max-w-2xl relative">
      <div className="absolute pl-2 pt-2">
        <Search size={21} color="gray" />
      </div>
      <input
        type="text"
        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:border-blue-500 outline-none"
        placeholder="Search for Students"
      />
    </div>
  );
};

export default SearchBox;
