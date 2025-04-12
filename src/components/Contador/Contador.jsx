import { useState } from 'react';
import './Contador.css';

function Contador({ initial = 1, stock = 10, onCountChange }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
    if (count < stock) {
        const newCount = count + 1;
        setCount(newCount);
        if (onCountChange) onCountChange(newCount);
        }
    };

    const handleSubtract = () => {
    if (count > 1) {
        const newCount = count - 1;
        setCount(newCount);
        if (onCountChange) onCountChange(newCount);
        }
    };

    return (
    <div className="contador-container">
        <p>Cantidad: {count}</p>
        <div className="buttons-container">
            <button className="btn-modify" onClick={handleSubtract}>-</button>
            <button className="btn-modify" onClick={handleAdd}>+</button>
        </div>
    </div>
    );
}

export default Contador;
