import { UserRoundPlus, X } from "lucide-react";
import React, { useState } from "react";
import CreateUserForm from "./forms/CreateUserForm";
import { Button } from "./ui/button";

const AddUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModelClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Button
        onClick={toggleModal}
        id="adduserbuttopn"
        className="inline-flex gap-x-3 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        Add Student
        <UserRoundPlus />
      </Button>

      {isModalOpen && (
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
                Create New Student
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <X size={20} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <CreateUserForm setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
