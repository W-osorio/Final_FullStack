// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import { authService } from "../services/authService.js";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());

  const login = (email, password) => {
    const loggedUser = authService.login(email, password);
    setUser(loggedUser);
    return loggedUser;
  };

  const register = (data) => {
    const newUser = authService.register(data);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const isAdmin = user?.rol === "ADMIN";

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
