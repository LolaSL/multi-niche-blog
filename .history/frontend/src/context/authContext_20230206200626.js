import { createContext, useEffect, useState } from "react";
import { onLogin, onLogout } from "../apis/auth.js";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (values) => {
    const res = await onLogin("/", values);
    setCurrentUser(res.data);
  };

  const logout = async (values) => {
    await onLogout("/");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};