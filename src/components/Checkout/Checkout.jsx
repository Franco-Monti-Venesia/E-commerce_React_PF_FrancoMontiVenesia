// src/components/Checkout/Checkout.jsx
import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    // Extraemos cart, total y clearCart desde el contexto
    const { cart, total, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: ''
    });
    const navigate = useNavigate();

    // Maneja los cambios en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Envía el formulario y crea la orden en Firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Construye el objeto orden usando total (valor) en lugar de totalPrice()
        const order = {
            buyer: formData,
            items: cart,
            total: total,
            date: new Date().toISOString()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
            // Redirige a la página principal o a una de confirmación
            navigate('/');
        } catch (error) {
            console.error("Error al generar la orden:", error);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            {orderId ? (
                <p>
                    Gracias por su compra. Su código de orden es: <strong>{orderId}</strong>
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="checkout-form">
                    <label>
                        Nombre
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre completo"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Teléfono
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Número de celular"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Dirección
                        <input
                            type="text"
                            name="direccion"
                            placeholder="Calle y número"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Confirmar compra</button>
                </form>
            )}
        </div>
    );
}

export default Checkout;
