import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>INDUMENDIENTE</h1>

            <nav>
                <ul>
                    <li>Camisetas</li>
                    <li>Pantalones</li>
                    <li>Accesorios</li>
                </ul>
            </nav>

            <CartWidget/>


        </header>
    )
}

export default NavBar