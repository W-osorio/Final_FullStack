// src/pages/admin/AdminProductosList.jsx
import { Link } from "react-router-dom";
import { products } from "../../data/products";

export const AdminProductosList = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Productos</h1>
        <Link to="/admin/productos/nuevo" className="btn btn-success btn-sm">
          + Nuevo producto
        </Link>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.marca}</td>
              <td>{p.estado}</td>
              <td>${p.precio.toLocaleString("es-CL")}</td>
              <td>
                {/* Más adelante conectamos estos botones con el backend */}
                <button className="btn btn-sm btn-outline-primary me-2">
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
