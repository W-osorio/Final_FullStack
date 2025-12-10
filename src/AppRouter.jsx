import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";

import { HomePage } from "./pages/public/HomePage";
import { CatalogPage } from "./pages/public/CatalogPage";
import { ProductDetailPage } from "./pages/public/ProductDetailPage";
import { CartPage } from "./pages/public/CartPage";
import { LoginPage } from "./pages/public/LoginPage";
import { RegisterPage } from "./pages/public/RegisterPage";

import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminProductosList } from "./pages/admin/AdminProductosList";
import { AdminProductoForm } from "./pages/admin/AdminProductoForm";
import { AdminUsuariosList } from "./pages/admin/AdminUsuariosList";

import { useAuth } from "./context/AuthContext";

// Componente para proteger rutas solo para admin
const RequireAdmin = ({ children }) => {
  const { isAdmin } = useAuth();
  const location = useLocation();

  if (!isAdmin) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="productos" element={<CatalogPage />} />
        <Route path="productos/:id" element={<ProductDetailPage />} />
        <Route path="carrito" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
      </Route>

      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <AdminLayout />
          </RequireAdmin>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="productos" element={<AdminProductosList />} />
        <Route path="productos/nuevo" element={<AdminProductoForm />} />
        <Route path="usuarios" element={<AdminUsuariosList />} />
      </Route>

      <Route
        path="*"
        element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>}
      />
    </Routes>
  );
};
