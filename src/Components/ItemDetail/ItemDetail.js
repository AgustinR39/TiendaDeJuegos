import { useContext } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import CartContext from "../Context/CardContext"
import Cart from "../Cart/Cart"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        console.log("Se agrego al carrito")

        const productObj = {
            id, name, price
        }

        addItem({ ...productObj, quantity: count})
    }

    return (
        <div className="card_detail">
            <picture>
                <img src={img} className="portada" alt={name} />
            </picture>
            <div>
                <h4>{name}</h4>
                <h6 className="card_text">Categoria: {category}</h6>
                <h6 className="card_text">Descripcion: {description}</h6>
                <h6 className="card_text">Precio: ${price}</h6>
                {isInCart(id) ? <Link to='/cart' element={<Cart />}>Ir al carrito</Link> : <Counter onAdd={handleAdd} stock={stock} />}
            </div>
        </div>
    )
}

export default ItemDetail