// src/pages/public/ProductDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";
import { ProductGrid } from "../../components/products/ProductGrid";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  // similares: todos menos el actual
  const similares = products.filter((p) => p.id !== product.id);

  // lógica del carrusel
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = Math.min(4, similares.length);
  const total = similares.length;

  const getVisibleProducts = () => {
    if (total === 0) return [];
    const visibles = [];
    for (let i = 0; i < itemsToShow; i++) {
      visibles.push(similares[(startIndex + i) % total]);
    }
    return visibles;
  };

  const handlePrev = () => {
    if (total <= itemsToShow) return;
    setStartIndex((prev) => (prev - itemsToShow + total) % total);
  };

  const handleNext = () => {
    if (total <= itemsToShow) return;
    setStartIndex((prev) => (prev + itemsToShow) % total);
  };

  const visibleProducts = getVisibleProducts();

  const handleAddToCart = () => {
    addToCart(product, 1);
    //navigate("/carrito");
  };

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-5">
          <img
            src={product.poster}
            alt={product.nombre}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-7">
          <h1>{product.nombre}</h1>
          <p className="text-muted">{product.marca}</p>
          <p>
            <span className="badge bg-success me-2">{product.estado}</span>
          </p>
          <h3 className="text-primary mb-3">
            ${product.precio.toLocaleString("es-CL")}
          </h3>
          <p>{product.desc}</p>

          <button
            className="btn btn-primary me-2"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
          <Link to="/productos" className="btn btn-outline-secondary">
            Volver al catálogo
          </Link>
        </div>
      </div>

      <div>
        <h3 className="h5 mb-3">Productos similares</h3>
        {similares.length === 0 ? (
          <p>No hay productos similares para mostrar.</p>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handlePrev}
                disabled={similares.length <= itemsToShow}
              >
                ←
              </button>
              <span className="text-muted small">
                Mostrando {itemsToShow} de {similares.length} juegos
              </span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleNext}
                disabled={similares.length <= itemsToShow}
              >
                →
              </button>
            </div>

            <ProductGrid products={visibleProducts} />
          </>
        )}
      </div>
    </div>
  );
};
