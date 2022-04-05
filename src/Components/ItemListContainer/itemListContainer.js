import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from "../../Productos" 
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then( prods => {
            setProducts(prods)
        })
    }, [])

    return(
        <div>
            <h1 className="tienda">{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer