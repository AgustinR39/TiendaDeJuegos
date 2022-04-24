import { useContext } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import CartContext from "../Context/CardContext"
import Cart from "../Cart/Cart"
import NotificationContext from "../Notification/Notification"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const { addItem, isInCart } = useContext(CartContext)

    const { setNotification } = useContext(NotificationContext)

    const handleAdd = (count) => {

        const productObj = {
            id, name, price
        }

        addItem({ ...productObj, quantity: count})
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
    }

    return (
        <div className="contenedor_card">
            <picture>
                <img src={img} className="portada_detail" alt={name} />
            </picture>
            <div className="contenedor_card_detail">
                <header className="detail_header">
                    <p>{name}</p>
                </header>
                <main className="detail_main">
                    <h4 className="card_text"><span className="negrito">Categoria:</span> {category}</h4>
                    <h4 className="card_text"><span className="negrito">Descripción:</span> {description}</h4>
                    <h4 className="card_text"><span className="negrito">Precio: </span> ${price}</h4>
                </main>
                <footer className="detail_footer">
                    {isInCart(id) ? <Link className="detail_carrito" to='/cart' element={<Cart />}>Ir al carrito</Link> : <Counter onAdd={handleAdd} stock={stock} />}
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail