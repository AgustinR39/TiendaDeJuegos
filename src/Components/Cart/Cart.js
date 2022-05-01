import './Cart.css'
import CartContext from "../CartContext/CartContext"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemCart from "../ItemCart/ItemCart"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore"
import { firestoreDb } from '../../Services/Firebase'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, getTotal, clearCart } = useContext(CartContext)

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Agustin Ronchi',
                phone: '2142214124',
                email: 'agustinronchi15@gmail.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    }else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`el id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        <h1>Se esta generando su urden</h1>
    }

    if(cart.length === 0) {
        return(
            <div>
                <h1 className="no_productos">No hay productos en el carrito</h1>
                <Link className="btn_menu" to='/' component={<ItemListContainer />}>Volver al menu</Link>
            </div>
            
        )
    }

    return(
        <>
        <h1 className="cart">Carrito</h1>
        
        { cart.map(p => <ItemCart key={p.id} {...p}/>) }
        <h3 className="total">Total: ${getTotal()}</h3>
        <div className="btns_finales">
            <button onClick={() => createOrder() } className="btn_final">Finalizar Compra</button>
            <button onClick={() => clearCart() } className="btn_final">Limpiar Carrito</button>
        </div>
        </>
    )
} 

export default Cart