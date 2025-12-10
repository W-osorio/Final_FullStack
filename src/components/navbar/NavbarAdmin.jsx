// src/components/navbar/NavbarAdmin.jsx
import { Link, NavLink } from "react-router-dom";

export const NavbarAdmin = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">

            <Link className="navbar-brand" to="/admin">
            Admin Level-Up
            </Link>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarAdmin"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarAdmin" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                    Dashboard
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/admin/productos">
                    Productos
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/admin/usuarios">
                    Usuarios
                </NavLink>
                </li>
            </ul>
            </div>

        </div>
        </nav>
    );
    };
