// src/pages/public/RegisterPage.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../../services/authService";
import Swal from "sweetalert2";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
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
        await authService.register(formData);

        Swal.fire({
            title: "Registro exitoso",
            text: "Ahora puedes iniciar sesión con tus credenciales.",
            icon: "success",
        });

        navigate("/login");
        } catch (error) {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message || "Hubo un problema al registrar el usuario.",
        });
        }
    };

    return (
        <div className="container py-5 d-flex justify-content-center">
        <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
            <h2 className="mb-4 text-center">Registro</h2>

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                type="text"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleChange}
                required
                />
            </div>

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
                Registrarme
            </button>
            </form>
        </div>
        </div>
    );
};
