import { useState } from "react"

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return(
        <div>
            <div className="botones">
                <button className="btnn" onClick={decrement}>-</button>
                <p>{count}</p>
                <button className="btnn" onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter