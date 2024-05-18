import { getStudents } from "@/api/student";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AddUser from "./AddUser";
import FilterBox from "./FilterBox";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import SortBox from "./SortBox";
import Table from "./Table";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [course, setCourse] = useState("");
  const [q, setq] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isDescOrder, setIsDescOrder] = useState(false);

  const debouncedSearchTerm = useDebounce(q, 500); // use debouncedSearchTerm to usequery key for improve performance

  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "students",
      currentPage,
      pageSize,
      debouncedSearchTerm,
      course,
      sortBy,
    ],
    queryFn: async () => {
      const data = await getStudents({
        currentPage,
        pageSize,
        q,
        course,
        sortBy,
      });
      setTotalStudents(data.total);
      setTotalPages(data.total_pages);
      return data.students;
    },
  });

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-x-6 gap-y-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center max-lg:items-start gap-x-4 gap-y-4 w-full lg:w-[80%]">
          <SearchBox setq={setq} q={q} />
          <SortBox
            sortBy={sortBy}
            setSortBy={setSortBy}
            isDescOrder={isDescOrder}
            setIsDescOrder={setIsDescOrder}
          />
          <FilterBox setCourse={setCourse} course={course} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4">
          <AddUser />
        </div>
      </div>
      <div className="overflow-x-auto shadow-md">
        <Table
          students={students}
          isLoading={isLoading}
          isError={isError}
          error={error}
          total={totalStudents}
        />
      </div>

      {totalPages > 1 && (
        <Pagination
          total={totalStudents}
          totalPages={totalPages}
          pageSize={pageSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Dashboard;
