import './cardWidget.css'
import { useContext } from 'react'
import CartContext from '../context/CardContext'

const CardWidget = () => {

const { getQuantity } = useContext(CartContext)

    return(
        <div className='carritoDiv'>
            <img src={'./imagenes/carrito.png'} className="carrito" alt="logo" />
            { getQuantity() }
        </div>
    )
}

export default CardWidget