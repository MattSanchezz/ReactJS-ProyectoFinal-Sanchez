import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <img className="imgIndu" src="./././img/indumendiente.jpg" alt="Logo Indumendiente" />
            </Link>
            <ul>
                <li>
                    <NavLink to={`/categoria/2`}>Indumentaria arriba</NavLink>
                </li>

                <li>
                    <NavLink to={`/categoria/3`} >Indumentaria abajo</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar