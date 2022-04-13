import { useState, useEffect } from "react"
import { getProductsById } from "../../asynmock" 
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    useEffect(() => {
        getProductsById(productId).then(item => {
            setProducts(item)
        }).catch(err => {
            console.log(err)
        }).finally(()=> {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })

    }, [productId])

    return(
        <div className="con_detail">
            {
                loading ?
                    <h1>Cargando...</h1> :
                product ?
                    <ItemDetail {...product} /> :
                    <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer