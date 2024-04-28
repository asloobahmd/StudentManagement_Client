import { Pencil, X } from "lucide-react";
import { useState } from "react";
import UpdateUserForm from "./forms/UpdateUserForm";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { getSingleStudent } from "@/api/student";

const UpdateUser = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    data: studentData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["student", userId],
    queryFn: async () => {
      const res = await getSingleStudent(userId);
      return res;
    },
    enabled: isModalOpen,
  });

  const handleModelClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Button
        onClick={toggleModal}
        className="bg-transparent hover:bg-slate-300 text-green-600"
        size={"icon"}
      >
        <Pencil />
      </Button>

      {isModalOpen && studentData && (
        <div
          id="crud-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/20"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal */}
          <div
            className="relative bg-white rounded-lg shadow dark:bg-gray-700 md:w-[600px] m-2"
            onClick={handleModelClick}
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Student
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <X size={20} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <UpdateUserForm
              studentData={studentData}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
