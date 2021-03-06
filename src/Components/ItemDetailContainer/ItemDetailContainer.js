import { useState, useEffect } from "react"
// import { getProductsById } from "../../asynmock" 
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { firestoreDb } from "../../Services/Firebase"
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = (setCart, cart) => {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()
    
    useEffect(() => {
        // getProductsById(productId).then(item => {
        //     setProducts(item)
        // }).catch(err => {
        //     console.log(err)
        // }).finally(()=> {
        //     setLoading(false)
        // })

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProducts(product)
        })

        return (() => {
            setProducts()
        })

    }, [productId])

    return(
        <div className="con_detail">
            {
                loading ?
                    <h1 className="no_productos">Cargando...</h1> :
                product ?
                    <ItemDetail {...product} setCart={setCart} cart={cart} /> :
                    <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer