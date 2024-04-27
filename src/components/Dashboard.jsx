import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import { heading } from "@/config/data";
import { getStudents } from "@/api/student";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import UpdateUser from "./UpdateUser";

const Dashboard = () => {
  const [headings, setHeadings] = useState(heading);

  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const data = await getStudents();
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const search = () => {
    console.log("Searching");
  };

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-x-6 gap-y-4 py-8">
        <SearchBox search={search} />
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4">
          <AddUser />
          <FilterBox />
        </div>
      </div>
      <div className="overflow-x-auto  shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headings.map((item, index) => (
                <th key={index} scope="col" className="p-4">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students?.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{item.id}</td>
                <td>
                  <div className="text-base font-semibold">{item.name}</div>
                </td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.course}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">{item.address}</div>
                </td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-4">
                    <UpdateUser />
                    <Button
                      className="bg-transparent hover:bg-slate-300 text-red-600"
                      size={"icon"}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
