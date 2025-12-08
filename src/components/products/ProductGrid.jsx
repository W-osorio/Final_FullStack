// src/components/products/ProductGrid.jsx
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No hay productos para mostrar.</p>;
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((p) => (
            <ProductCard key={p.id} product={p} />
        ))}
        </div>
    );
};
