import Navbar from "@/components/Navbar";
import { AuthContext } from "@/context/AuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import React, { useContext } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

const Router = () => {
  const { currentUser } = useContext(AuthContext);

  const currUser = currentUser;

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const LoginPassRoute = ({ children }) => {
    if (currUser) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <>
          <LoginPassRoute>
            <Login />,
          </LoginPassRoute>
        </>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return { router };
};

export default Router;
