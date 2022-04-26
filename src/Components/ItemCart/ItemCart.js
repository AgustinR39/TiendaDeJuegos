import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import './ItemCart.css'

const ItemCart = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className="menu_cart">
            <header>
                <h2>{name}</h2>
            </header>
            <section>
                <p>Cantidad: {quantity}</p>
                <p>Precio x Unidad: ${price}</p>
            </section>           
            <footer className="footer_cart">
                    <p className="footer_cart_info"> Subtotal: ${price * quantity}</p>
                    <button className="btn_delete" onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default ItemCart