// src/services/authService.js

const API_URL = "http://localhost:8080/api/auth";

const login = async (username, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  const user = await response.json();

  // Guardamos el usuario en localStorage
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

const register = async (username, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Error al registrar usuario");
  }

  const user = await response.json();

  // También lo guardamos (opcional)
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

const logout = () => {
  localStorage.removeItem("user");
};

// 👉 ESTA función es la que te daba error
const getCurrentUser = () => {
  const stored = localStorage.getItem("user");
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error al parsear usuario de localStorage", e);
    return null;
  }
};

export const authService = {
  login,
  register,
  logout,
  getCurrentUser,
};
