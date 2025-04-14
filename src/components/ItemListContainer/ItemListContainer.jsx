import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from 'react-router-dom';
import { productos } from '../../productos.js';
import { db } from '../../firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

function ItemListContainer() {
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        if (todosLosProductos.length === 0) {
            fetchData().then(response => {
                setTodosLosProductos(response);
                if (categoria) {
                    const productosFiltrados = response.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados);
                    setLoading(false);
                } else {
                    setMisProductos(response);
                    setLoading(false);
                };
            })
                .catch(err => console.error(err));
        } else {
            if (categoria) {
                const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
                setMisProductos(productosFiltrados);
            } else {
                setMisProductos(todosLosProductos);
            };
        }
    }, [categoria]);

    // const cargarProductos = () => {
    //     let refCollection = collection(db, "productos");
    //     productos.forEach((elemento) => {
    //         addDoc(refCollection, elemento);
    //     });
    // };

    return (
        <div className="container-cards">
            {
                loading ? <Loader /> :
                misProductos.map(producto => (
                    <div key={producto.id} className="card-con-imagen">
                        {producto.image && (
                            <img 
                                src={producto.image} 
                                alt={producto.nombre} 
                                className="imagen-producto"
                            />
                        )}
                        <Item 
                            id={producto.id} 
                            nombre={producto.nombre} 
                            precio={producto.precio} 
                        />
                    </div>
                ))
            }
            {/* <button onClick={cargarProductos}>Cargar muchos productos</button> */}
        </div>
    );
};

export default ItemListContainer;
