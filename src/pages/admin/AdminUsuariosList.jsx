// src/pages/admin/AdminUsuariosList.jsx
import { useEffect, useState } from "react";
import { authService } from "../../services/authService";

export const AdminUsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const data = await authService.getUsers();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al cargar usuarios", error);
      }
    };

    cargarUsuarios();
  }, []);

  return (
    <div className="container py-4">
      <h2>Usuarios registrados</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
