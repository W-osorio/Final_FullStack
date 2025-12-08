// src/pages/admin/AdminDashboard.jsx
import { Link } from "react-router-dom";

export const AdminDashboard = () => {
  return (
    <div>
      <h1 className="mb-4">Panel de administrador</h1>
      <p className="text-muted mb-4">
        Desde aquí podrás gestionar productos y usuarios de la tienda.
      </p>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Productos</h5>
              <p className="card-text">
                Ver y administrar todos los productos de la tienda.
              </p>
              <Link to="/admin/productos" className="btn btn-primary btn-sm">
                Ver productos
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nuevo producto</h5>
              <p className="card-text">
                Agrega un producto nuevo al catálogo.
              </p>
              <Link
                to="/admin/productos/nuevo"
                className="btn btn-success btn-sm"
              >
                Crear producto
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Usuarios</h5>
              <p className="card-text">
                Revisa la lista de usuarios registrados.
              </p>
              <Link to="/admin/usuarios" className="btn btn-secondary btn-sm">
                Ver usuarios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
