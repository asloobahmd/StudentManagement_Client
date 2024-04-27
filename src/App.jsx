import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const { router } = Router();

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
};

export default App;
