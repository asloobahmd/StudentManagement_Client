import React from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "@/api/student";

export const DeleteBtn = ({ userId }) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteSt, isPending } = useMutation({
    mutationFn: async (id) => {
      await deleteStudent(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <Button
      className="bg-transparent hover:bg-slate-300 text-red-600"
      size={"icon"}
      onClick={() => deleteSt(userId)}
      isLoading={isPending}
    >
      <Trash2 />
    </Button>
  );
};
