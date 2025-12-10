// src/pages/public/HomePage.jsx
import { products } from "../../data/products";
import { ProductGrid } from "../../components/products/ProductGrid";

export const HomePage = () => {
  const destacados = products.slice(0, 4);

  return (
    <div>
      <section className="text-center mb-4">
        <h1 className="mb-3">Bienvenido a Level-UP Gamer</h1>
        <p className="lead">
          Descubre los mejores juegos y accesorios para gamers.
        </p>
      </section>

      <section>
        <h2 className="h4 mb-3">Productos destacados</h2>
        <ProductGrid products={destacados} />
      </section>
    </div>
  );
};
