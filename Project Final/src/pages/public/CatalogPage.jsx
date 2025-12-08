// src/pages/public/CatalogPage.jsx
import { products } from "../../data/products";
import { ProductGrid } from "../../components/products/ProductGrid";

export const CatalogPage = () => {
  return (
    <div>
      <h1 className="mb-4">Catálogo</h1>
      <ProductGrid products={products} />
    </div>
  );
};
