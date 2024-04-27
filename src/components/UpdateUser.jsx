import { Pencil, UserRoundPlus, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const UpdateUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const inputs = [
    { name: "First Name", placeholder: "First Name" },
    { name: "Last Name", placeholder: "Last Name" },
    { name: "Study Programme", placeholder: "Study Programme" },
    { name: "Address", placeholder: "Address" },
    { name: "Age", placeholder: "Age" },
  ];

  return (
    <div>
      {/* Modal toggle */}
      <Button
        onClick={toggleModal}
        className="bg-transparent hover:bg-slate-300 text-green-600"
        size={"icon"}
      >
        <Pencil />
      </Button>

      {/* Main modal */}
      {isModalOpen && (
        <div
          id="crud-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/20"
        >
          <div className="relative p-4 w-full max-w-md">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Update Student
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <X size={20} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-4 md:p-5 ">
                <div className="grid gap-4 mb-4 grid-cols-4">
                  {inputs.map((item, index) => (
                    <div className="col-span-2" key={index}>
                      <label
                        key={index}
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {item.name}
                      </label>

                      <input
                        type="text"
                        name={item.name.toLowerCase()}
                        id={item.name.toLowerCase()}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={item.placeholder}
                        required
                      />
                    </div>
                  ))}

                  {/* Add more form fields as needed */}
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Update Student
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
