import { useState } from "react"
import './Counter.css'

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < 10){
            setCount(count + 1)
        }
    }

    return(
        <div>
            <div className="botones">
                <button className="counter" onClick={decrement}>-</button>
                <p>{count}</p>
                <button className="counter" onClick={increment}>+</button>
            </div>
            <div>
                <button className="counter" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter