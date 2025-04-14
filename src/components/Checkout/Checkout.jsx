import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    const { cart, clearCart, total } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Orden confirmada:", formData, cart, total);
        alert('Orden confirmada! Gracias por su compra.');
        clearCart();
        navigate('/');
    };

    return (
        <div className="checkout-container">
        <h2>Finalizar Compra</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
            <label>
            Nombre:
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                />
            </label>
            <label>
            Email:
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
            />
            </label>
            <label>
            Teléfono:
            <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
            />
            </label>
            <label>
            Dirección:
            <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
            />
            </label>
            <button type="submit">Confirmar Compra</button>
        </form>
        </div>
    );
}

export default Checkout;
