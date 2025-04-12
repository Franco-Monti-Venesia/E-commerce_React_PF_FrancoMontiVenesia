import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Tu carrito está vacío</h2>
            <Link to="/">Volver a la tienda</Link>
        </div>
        );
    }

    return (
        <div style={{ padding: "2rem" }}>
        <h1>Tu Carrito</h1>
        <hr />
        {cart.map((item) => (
            <div key={item.id} style={{ borderBottom: "1px solid #ddd", marginBottom: "1rem", paddingBottom: "1rem" }}>
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio Unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>
                Eliminar
            </button>
            </div>
        ))}
        <h2>Total: ${totalPrice}</h2>
        <div style={{ marginTop: "1rem" }}>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
        </div>
    );
};

export default Cart;
