// src/layouts/AdminLayout.jsx
import { Outlet, Link } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Panel Admin</h5>
          <Link to="/" className="btn btn-sm btn-outline-light">
            Volver a la tienda
          </Link>
        </div>
      </header>

      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-secondary text-white text-center py-2">
        <small>Admin · MiTienda</small>
      </footer>
    </div>
  );
};
