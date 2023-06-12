import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';


const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png";
    return (
        <Link to='/cart'>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            {
                totalCantidad > 0 && <span className='itemsIndicador'> {totalCantidad} </span>
            }
        </Link>
    )
}

export default CartWidget