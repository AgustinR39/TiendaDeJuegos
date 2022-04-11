import { useState, useEffect } from "react"
import { getProducts } from "../../asynmock" 
import ItemListDetail from "../ItemListDetail/ItemListDetail"


const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then( prods => {
            setProducts(prods)
        })
    }, [])

    return(
        <div>
            <h1 className="tienda">{props.greeting}</h1>
            <ItemListDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer