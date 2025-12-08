// src/routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, roleRequired }) => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" replace />;

    if (roleRequired && user.role !== roleRequired) {
        // Podrías redirigir a página 403
        return <Navigate to="/" replace />;
    }

    return children;
};
