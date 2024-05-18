import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      setLoading(false);

      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <nav className="bg-slate-900 text-white">
      <div className="container flex justify-between items-center h-[60px] md:px-[50px]">
        <h1 className="text-3xl font-semibold">LOGO</h1>
        <ul className="flex gap-x-8">
          <li>Home</li>
          <Button
            isLoading={loading}
            className="p-1 px-2 bg-red-700 hover:bg-red-500 rounded-sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
