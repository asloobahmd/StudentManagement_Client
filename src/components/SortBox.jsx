import React from "react";

const SortBox = ({ setSortBy, sortBy, isDescOrder, setIsDescOrder }) => {
  const handleSortOrderToggle = () => {
    setIsDescOrder(!isDescOrder);
    setSortBy((prevSortBy) => {
      const [field] = prevSortBy.split(":");
      return `${field}:${!isDescOrder ? "desc" : "asc"}`;
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(`${value}:${isDescOrder ? "desc" : "asc"}`);
  };

  return (
    <div className="w-fit lg:w-[550px] max-w-[170px] flex items-center">
      <span className="text-gray-400 mr-1">Sort By:</span>
      <select
        name="course"
        id=""
        className="outline-none py-2  rounded-lg cursor-pointer bg-transparent text-white"
        defaultValue=""
        onChange={handleSortChange}
      >
        <option value="" disabled>
          Sort By
        </option>
        <option className="text-black" value="name">
          Name
        </option>
        <option className="text-black" value="course">
          Course
        </option>
        <option className="text-black" value="age">
          Age
        </option>
        <option className="text-black" value="address">
          Address
        </option>
      </select>

      <button className="ml-2 text-white" onClick={handleSortOrderToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-down-up"
        >
          <path d="m3 16 4 4 4-4" />
          <path d="M7 20V4" />
          <path d="m21 8-4-4-4 4" />
          <path d="M17 4v16" />
        </svg>
      </button>
    </div>
  );
};

export default SortBox;
