const API_URL = "http://localhost:8080/api";

export const authService = {
  async register(data) {
    await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  async login(data) {
    const resp = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
      throw new Error("Credenciales inválidas");
    }

    return await resp.json();
  },

  async getUsers() {
    const resp = await fetch(`${API_URL}/admin/usuarios`);
    if (!resp.ok) {
      throw new Error("Error al obtener usuarios");
    }
    return await resp.json();
  },
};
