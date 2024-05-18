import { heading } from "@/config/data";
import UpdateUser from "./UpdateUser";
import { DeleteBtn } from "./DeleteBtn";
import { useState } from "react";

const Table = ({ students, isLoading, isError, error, total }) => {
  const [headings, setHeadings] = useState(heading);

  if (isLoading) {
    return <div className="text-white mt-2">Loading...</div>;
  }
  if (isError) {
    return <div className="text-white mt-2">Error: {error.message}</div>;
  }

  if (total <= 0) {
    return <div className="text-white mt-2">No records Match...</div>;
  }

  return (
    <table className="w-full text-sm text-left rtl:text-right">
      <thead className="text-xs text-white uppercase bg-slate-700">
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
          <tr
            key={item.id}
            className="bg-slate-600 text-gray-300 hover:text-black border-b hover:bg-gray-200"
          >
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
                <UpdateUser userId={item.id} />
                <DeleteBtn userId={item.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
