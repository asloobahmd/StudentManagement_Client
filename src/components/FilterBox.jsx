const FilterBox = ({ setCourse, course }) => {
  const handlechange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <div className="w-fit lg:w-[550px] max-w-[230px] flex items-center">
      <select
        name="course"
        id=""
        value={course}
        className="outline-none p-2 rounded-lg cursor-pointer bg-transparent border border-gray-400 text-white"
        onChange={handlechange}
      >
        <option value="" disabled>
          Filter by course
        </option>
        <option className="text-black" value="DSA">
          DSA
        </option>
        <option className="text-black" value="Computing Maths">
          Computing Maths
        </option>
        <option className="text-black" value="Database Management">
          Database Management
        </option>
        <option className="text-black" value="Web Technology">
          Web Technology
        </option>
        <option className="text-black" value="Software Testing">
          Software Testing
        </option>
      </select>
      {course ? (
        <button className="ml-2 text-red-500" onClick={() => setCourse("")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterBox;
