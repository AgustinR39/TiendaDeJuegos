import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../Context/CardContext"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './Cart.css'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div>
                <h1 className="no_productos">No hay productos en el carrito</h1>
                <Link className="btn_menu" to='/' element={<ItemListContainer />}>Volver al menu</Link>
            </div>
            
        )
    }

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