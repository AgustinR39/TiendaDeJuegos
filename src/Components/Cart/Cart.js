import CartContext from "../CartContext/CartContext"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemCart from "../ItemCart/ItemCart"
import { useContext } from "react"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {

    const { cart, getTotal, clearCart } = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div>
                <h1 className="no_productos">No hay productos en el carrito</h1>
                <Link className="btn_menu" to='/' component={<ItemListContainer />}>Volver al menu</Link>
            </div>
            
        )
    }

    return(
        <>
        <h1 className="cart">Carrito</h1>
        
        { cart.map(p => <ItemCart key={p.id} {...p}/>) }
        <h3 className="total">Total: ${getTotal()}</h3>
        <div className="btns_finales">
            <button className="btn_final">Finalizar Compra</button>
            <button onClick={() => clearCart()} className="btn_final">Limpiar Carrito</button>
        </div>
        </>
    )
} 

export default Cart