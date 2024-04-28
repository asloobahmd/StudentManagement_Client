import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStudent, updateStudent } from "@/api/student";
import { Button } from "../ui/button";

const UpdateUserForm = ({ setIsModalOpen, studentData }) => {
  let userSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name should have atleast 3 characters")
      .required("Name is required"),
    email: yup.string().email().required("Email is required"),
    course: yup.string().required("Course is required"),
    address: yup.string().required("Address is required"),
    age: yup
      .number("Age must be a number")
      .positive("Age is not valid")
      .integer("Age should be a whole number")
      .required("Age is required"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: studentData,
  });

  const queryClient = useQueryClient();

  const { mutateAsync: updatest, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await updateStudent(payload.id, payload);
      console.log(res);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onsubmit = async (data) => {
    try {
      await updatest(data);
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="p-4 md:p-5 ">
      <div className="grid gap-4 mb-4 grid-cols-4">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>

          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="course"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course
          </label>

          <input
            type="text"
            id="course"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Course"
            {...register("course")}
          />
          {errors.course && (
            <p className="text-sm text-red-500">{errors.course.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>

          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Address"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Age
          </label>

          <input
            type="text"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Age"
            {...register("age")}
          />
          {errors.age && (
            <p className="text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        isLoading={isPending}
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update Student
      </Button>
    </form>
  );
};

export default UpdateUserForm;
