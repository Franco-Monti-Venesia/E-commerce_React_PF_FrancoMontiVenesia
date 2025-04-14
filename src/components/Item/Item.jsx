import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio }) {

    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
    };

    return (
        <div className="card">
            <h2>{nombre || "NO HAY STOCK"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <Link to={`/detalle/${id}`}>
                <button disabled={!nombre} className="card-btn">
                    Ver detalle
                </button>
            </Link>
        </div>
    );
};

export default Item;