import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <div className="container flex justify-between items-center h-[60px] md:px-[50px]">
        <h1 className="text-3xl font-semibold">LOGO</h1>
        <ul className="flex gap-x-8">
          <li>Home</li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
