// src/layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import { NavbarPublic } from "../components/navbar/NavbarPublic";
import { Footer } from "../components/footer/Footer";

export const PublicLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavbarPublic />
      </header>

      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
