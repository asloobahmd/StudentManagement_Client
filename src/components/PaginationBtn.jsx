const PaginationBtn = ({ pg, setCurrentPage, currentPage }) => {
  return (
    <button
      onClick={() => setCurrentPage(pg)}
      className={` ${
        currentPage == pg ? "bg-gray-500 text-white" : "bg-white"
      } p-[6px] rounded-sm hover:bg-gray-500 hover:text-white`}
    >
      {pg}
    </button>
  );
};

export default PaginationBtn;
