import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";

export const RegisterPage = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !email || !password || !password2) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Todos los campos son obligatorios",
        });
        return;
        }

        if (password !== password2) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Las contraseñas no coinciden",
        });
        return;
        }

        if (password.length < 4) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La contraseña debe tener al menos 4 caracteres",
        });
        return;
        }

        try {
        register({ nombre, email, password });

        // ✅ Swal de éxito
        Swal.fire({
            title: "Good job!",
            text: "Registro exitoso",
            icon: "success",
        });

        navigate("/", { replace: true });
        } catch (err) {
        // ❌ Swal de error (por ejemplo, email ya registrado)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message || "Something went wrong!",
        });
        }
    };

    return (
        <div className="row justify-content-center mt-5">
        <div className="col-md-5">
            <h1 className="mb-4">Registro</h1>

            <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Repetir contraseña</label>
                <input
                type="password"
                className="form-control"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
                />
            </div>

            <button type="submit" className="btn btn-success w-100">
                Crear cuenta
            </button>
            </form>

            <p className="mt-3 small">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
        </div>
        </div>
    );
};
