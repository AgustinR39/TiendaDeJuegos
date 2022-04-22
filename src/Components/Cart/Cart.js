import { useContext } from "react"
import CartContext from "../Context/CardContext"
import './Cart.css'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <>
        <h1 className="cart">Cart</h1>
        <ul className="cart_obj">
            {
                cart.map(prod => <li key={prod.id}><span className="bold">{prod.name}</span> Cantidad: {prod.quantity} precio uni: {prod.price} SubTotal: {prod.quantity * prod.price}<button onClick={() => removeItem(prod.id)}>X</button></li>)
            }
        </ul>
        </>
    )
} 

export default Cart