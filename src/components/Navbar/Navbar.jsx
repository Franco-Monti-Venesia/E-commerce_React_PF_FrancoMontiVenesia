import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <header className='header-nav'>
            <nav className="nav-bar">
                <img src="src\assets\logoPastaPng.webp" alt="Logo de empresa" className='nav-img'/>
                <ul className="nav-bar-options">
                    <li className="nav-bar-item">
                        <Link className='nav-link' to="/">
                            Productos
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link className='nav-link' to="/categoria/Pastas">
                            Pastas
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link className='nav-link' to="/categoria/Bebida">
                            Bebidas
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link className='nav-link' to="/categoria/Agregados">
                            Agregados
                        </Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;