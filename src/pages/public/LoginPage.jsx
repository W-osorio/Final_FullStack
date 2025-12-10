// src/pages/public/LoginPage.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { authService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const user = await authService.login(formData);

        // Guardar usuaro 
        login(user);

        Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: `Hola ${user.nombre || "usuario"} :)`,
        });

        const from = location.state?.from || "/";
        navigate(from, { replace: true });
        } catch (error) {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Credenciales inválidas",
            text: error.message || "Revisa tu correo y contraseña.",
        });
        }
    };

    return (
        <div className="container py-5 d-flex justify-content-center">
        <div
            className="card shadow p-4"
            style={{ maxWidth: "450px", width: "100%" }}
        >
            <h2 className="mb-4 text-center">Iniciar sesión</h2>

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Correo</label>
                <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Entrar
            </button>
            </form>

            <div className="alert alert-info mt-4">
            <h6 className="mb-2">Credenciales de prueba</h6>
            <p className="mb-1">
                <strong>Admin:</strong>
                <br />
                Email: <code>admin@tiendagamer.com</code>
                <br />
                Password: <code>admin123</code>
            </p>
            </div>

        </div>
        </div>
    );
};
