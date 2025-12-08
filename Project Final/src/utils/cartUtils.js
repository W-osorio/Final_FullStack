export const calcularTotalConIVA = (items, iva = 0.19) => {
    const subtotal = items.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    return Math.round(subtotal + subtotal * iva);
    };
