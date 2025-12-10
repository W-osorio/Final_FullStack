    // src/components/products/ProductCard.jsx
    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    import { useCart } from "../../context/CartContext";

    export const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <div className="col">
        <div className="card h-100 shadow-sm">
            <img
            src={product.poster}
            className="card-img-top"
            alt={product.nombre}
            style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text text-muted mb-1">{product.marca}</p>
            <p className="card-text fw-bold mb-2">
                ${product.precio.toLocaleString("es-CL")}
            </p>
            <p className="card-text small flex-grow-1">
                {product.desc.substring(0, 80)}...
            </p>

            <div className="mt-2 d-flex gap-2 flex-wrap">
                <Link
                to={`/productos/${product.id}`}
                className="btn btn-primary btn-sm"
                >
                Ver detalle
                </Link>

                <button
                type="button"
                className="btn btn-outline-success btn-sm"
                onClick={handleAddToCart}
                >
                Añadir al carrito
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    };
