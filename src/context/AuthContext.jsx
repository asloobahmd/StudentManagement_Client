import API from "@/api";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [token, setToken] = useState(localStorage.getItem("utoken") || null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("utoken", token);
  }, [token]);

  const login = async (loginPayload) => {
    try {
      const { data } = await API.post("/auth/login", loginPayload);
      setCurrentUser(data?.user);
      setToken(data?.utoken);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
      setToken(null);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
