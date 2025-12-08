import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const from = location.state?.from || "/";

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
        // login puede lanzar error si las credenciales son inválidas
        login(email, password);

        // ✅ Swal de éxito
        Swal.fire({
            title: "Good job!",
            text: "Has iniciado sesión correctamente",
            icon: "success",
        });

        navigate(from, { replace: true });
        } catch (err) {
        // ❌ Swal de error
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
            <h1 className="mb-4">Iniciar sesión</h1>

            <div className="alert alert-info small">
            <strong>Admin demo:</strong> admin@tienda.com / Admin123
            </div>

            <form onSubmit={handleSubmit} noValidate>
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
                minLength={4}
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Entrar
            </button>
            </form>

            <p className="mt-3 small">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
            </p>
        </div>
        </div>
    );
    };
