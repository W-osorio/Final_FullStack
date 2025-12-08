import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export const NavbarPublic = () => {
  const { totalItems } = useCart();
  const { user, isAdmin, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mi Tienda Gamer
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Catálogo
              </NavLink>
            </li>

            {isAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/carrito">
                Carrito ({totalItems})
              </NavLink>
            </li>

            {user ? (
              <>
                <li className="nav-item me-2">
                  <span className="navbar-text text-light small">
                    Hola, {user.nombre} ({user.rol})
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-2">
                  <NavLink
                    className="btn btn-outline-light btn-sm"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-primary btn-sm" to="/registro">
                    Registro
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
