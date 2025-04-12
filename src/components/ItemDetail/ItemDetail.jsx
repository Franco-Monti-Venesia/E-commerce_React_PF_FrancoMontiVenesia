import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';
import Contador from '../Contador/Contador';

function ItemDetail() {
    const { id } = useParams();
    const [detalle, setDetalle] = useState(null);
    const [selectedCount, setSelectedCount] = useState(1);

    const handleCountChange = (newCount) => {
    setSelectedCount(newCount);
    };

    function agregarAlCarrito() {
    console.log("Agregar al carrito:", detalle.nombre, "Cantidad:", selectedCount);
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
    </div>
    );
}

export default ItemDetail;
