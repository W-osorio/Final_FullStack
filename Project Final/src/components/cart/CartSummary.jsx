export const CartSummary = ({ subtotal, iva, total }) => {
    return (
        <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between">
            <span>Subtotal</span>
            <strong>${subtotal.toLocaleString()}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span>IVA</span>
            <strong>${iva.toLocaleString()}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>${total.toLocaleString()}</strong>
        </li>
        </ul>
    );
};
