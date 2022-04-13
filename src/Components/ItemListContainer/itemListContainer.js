import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from "../../asynmock" 
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect(() => {
        getProducts(categoryId).then( prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return(
        <div>
            <h1 className="tienda">Tienda</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer