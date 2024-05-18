import { Search } from "lucide-react";

const SearchBox = ({ setq, q }) => {
  return (
    <div className="w-full md:w-[600px] relative">
      <div className="absolute pl-2 pt-2">
        <Search size={21} color="gray" />
      </div>
      <input
        type="search"
        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:border-blue-500 outline-none"
        placeholder="Search by Name or Email"
        value={q}
        onChange={(e) => setq(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
