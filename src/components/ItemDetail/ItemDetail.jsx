// src/components/ItemDetail/ItemDetail.jsx
import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState, useContext } from 'react';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';
import Contador from '../Contador/Contador';
import { CartContext } from '../../context/CartContext';
import Notification from '../Notification/Notification';

function ItemDetail() {
    const { id } = useParams();
    const [detalle, setDetalle] = useState(null);
    const [selectedCount, setSelectedCount] = useState(1);
    const [showNotification, setShowNotification] = useState(false);

    const { addItem } = useContext(CartContext);

    const handleCountChange = (newCount) => {
        setSelectedCount(newCount);
    };

    function agregarAlCarrito() {
        addItem(detalle, selectedCount);
        console.log("Producto agregado al carrito:", detalle.nombre, "Cantidad:", selectedCount);
        setShowNotification(true); // Muestra la notificación
    }

    useEffect(() => {
        fetchData()
        .then(response => {
            const detalleDelProducto = response.find(el => el.id === parseInt(id));
            setDetalle(detalleDelProducto);
        })
        .catch(err => console.error(err));
    }, [id]);

    return (
        !detalle ? <Loader />
        :
        <div className="card-detail">
            <h2>{detalle.nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${detalle.precio || "SIN PRECIO"}</h3>
            <p>Descripción: {detalle.descripcion}</p>
            {detalle.stock > 0 ? (
                <p>Quedan {detalle.stock} unidades</p>
            ) : (
                <p>Producto agotado!</p>
            )}
            {detalle.oferta && <p><b>PRODUCTO EN OFERTA</b></p>}

            <Contador initial={1} stock={detalle.stock} onCountChange={handleCountChange} />

            <button 
            disabled={detalle.stock === 0} 
            className="card-detail-btn" 
            onClick={agregarAlCarrito}
            >
            Agregar al carrito
            </button>
            <Link to="/">
            <button className="card-detail-btn">Volver al inicio</button>
            </Link>

            {/* Notificación: se muestra cuando showNotification es true */}
            {showNotification && (
            <Notification 
                message="Producto agregado al carrito" 
                onClose={() => setShowNotification(false)} 
            />
            )}
        </div>
    );
}

export default ItemDetail;
