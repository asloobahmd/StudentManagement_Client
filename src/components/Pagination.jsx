import React from "react";
import PaginationBtn from "./PaginationBtn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {
  //
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const nextPage = () => setCurrentPage((prev) => prev + 1);

  return (
    <div className="flex justify-center mt-5 text-black">
      <div className="flex gap-x-2">
        <button
          className="p-1 bg-white  rounded-sm disabled:bg-gray-400"
          disabled={currentPage == 1}
          onClick={prevPage}
        >
          <ChevronLeft />
        </button>
        {pagesArray.map((pg) => (
          <PaginationBtn
            key={pg}
            pg={pg}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ))}
        <button
          className="p-1 bg-white  rounded-sm disabled:bg-gray-400"
          onClick={nextPage}
          disabled={currentPage == totalPages}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
