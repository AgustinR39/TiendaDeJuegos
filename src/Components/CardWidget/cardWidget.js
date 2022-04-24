import './CardWidget.css'
import { useContext } from 'react'
import CartContext from '../Context/CardContext'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const CardWidget = () => {

const { getQuantity } = useContext(CartContext)

    if(getQuantity() === 0) {
        return(
            <div className='carritoVacio'></div>
        )
    }

    return(
        <>
        <Link className='carritoDiv' to='/cart' element={Cart}>
        <div className='carritoDiv'>
            <img src={'../imagenes/carrito.png'} className="carrito" alt="logo" />
            { getQuantity() }
        </div>
        </Link>
        </>
    )
}

export default CardWidget