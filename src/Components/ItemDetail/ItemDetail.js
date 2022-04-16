import { useState } from "react"
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import './ItemDetail.css'

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock)
            setCount(e.target.value)

    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({onConfirm, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (count) => {
        console.log("Agregar al carrito")
        setQuantity(count)
    }

    const Count = typeInput ? ButtonCount : InputCount

    return (
        <div className="card_detail">
            <button onClick={() => setTypeInput(!typeInput)}>Cambiar Count</button>
            <picture>
                <img src={img} className="portada" alt={name} />
            </picture>
            <div>
                <h4>{name}</h4>
                <h6 className="card_text">Categoria: {category}</h6>
                <h6 className="card_text">Descripcion: {description}</h6>
                <h6 className="card_text">Precio: ${price}</h6>
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock} />}
            </div>
        </div>
    )
}

export default ItemDetail