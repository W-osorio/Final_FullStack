import { useEffect, useState } from "react";
import { authService } from "../../services/authService";



// admin@tienda.com / Admin123



export const AdminUsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const data = authService.getUsers();
    setUsuarios(data);
  }, []);

  return (
    <div>
      <h1 className="mb-4">Usuarios registrados</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
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
