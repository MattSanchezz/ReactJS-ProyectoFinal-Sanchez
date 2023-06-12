import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <img className="imgIndu" src="./././img/indumendiente.jpg" alt="Logo Indumendiente" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className="miBtn-ind" to={`/categoria/2`}>Indumentaria arriba</NavLink>
                    </li>

                    <li>
                        <NavLink className="miBtn-ind" to={`/categoria/3`} >Indumentaria abajo</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar