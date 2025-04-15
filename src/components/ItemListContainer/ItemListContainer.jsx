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
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        const obtenerProductos = async () => {
            setLoading(true);
            try {
                const productosRef = collection(db, "productos");
    
                let consulta;
                if (categoria) {
                    consulta = query(productosRef, where("categoria", "==", categoria));
                } else {
                    consulta = productosRef;
                }
    
                const querySnapshot = await getDocs(consulta);
                const productosFirebase = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
    
                setMisProductos(productosFirebase);
                setTodosLosProductos(productosFirebase); // Podés seguir guardando todos por si querés usar más adelante
            } catch (error) {
                console.error("Error al obtener productos desde Firebase:", error);
            } finally {
                setLoading(false);
            }
        };
    
        obtenerProductos();
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
                    <Item 
                        key={producto.id}
                        id={producto.id} 
                        nombre={producto.nombre} 
                        precio={producto.precio} 
                        imageUrl={producto.imageUrl}
                    />
                ))
            }
            {/* <button onClick={cargarProductos}>Cargar muchos productos</button> */}
        </div>
    );
};

export default ItemListContainer;
