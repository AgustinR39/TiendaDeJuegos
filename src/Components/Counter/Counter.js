import { useState } from "react"
import './Counter.css'

const Counter = ({ onAdd, stock = 0, initial = 1 }) => {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    if(stock === 0) {
        return <button className='detail_carrito' disabled>No hay stock</button>
    }

    return(
        <div>
            <div className="botones">
                <button className="counter" onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button className="counter" onClick={increment}>+</button>
            </div>
            <div>
                <button className="counter" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter