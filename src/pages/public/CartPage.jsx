// src/pages/public/CartPage.jsx
import { useCart } from "../../context/CartContext";

export const CartPage = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    iva,
    total,
    ivaRate,
  } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h1 className="mb-3">Carrito de compras</h1>
        <p>Tu carrito está vacío. ¡Agrega algún juego desde el catálogo! 🎮</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4">Carrito de compras</h1>

      <table className="table align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th className="text-center">Cantidad</th>
            <th className="text-end">Precio</th>
            <th className="text-end">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>
                <strong>{product.nombre}</strong>
                <div className="text-muted small">{product.marca}</div>
              </td>
              <td className="text-center">
                <div className="btn-group btn-group-sm">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      updateQuantity(product.id, quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="btn btn-light">{quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      updateQuantity(product.id, quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-end">
                ${product.precio.toLocaleString("es-CL")}
              </td>
              <td className="text-end">
                ${(product.precio * quantity).toLocaleString("es-CL")}
              </td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Quitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end mt-4">
        <div className="card" style={{ minWidth: "260px" }}>
          <div className="card-body">
            <h5 className="card-title">Resumen</h5>
            <p className="d-flex justify-content-between mb-1">
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString("es-CL")}</span>
            </p>
            <p className="d-flex justify-content-between mb-1">
              <span>IVA ({Math.round(ivaRate * 100)}%):</span>
              <span>${iva.toLocaleString("es-CL")}</span>
            </p>
            <hr />
            <p className="d-flex justify-content-between fw-bold mb-0">
              <span>Total:</span>
              <span>${total.toLocaleString("es-CL")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
