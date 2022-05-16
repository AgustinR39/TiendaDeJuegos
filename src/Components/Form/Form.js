import './Form.css'
import CartContext from '../CartContext/CartContext'
import Cart from '../Cart/Cart'
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../Services/Firebase'
import { Link } from "react-router-dom"

const Form = () => {

    const [input, setInput] = useState({name: '', phone: '', address: '', mail: '', mailConfirm: '' })
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, getTotal, clearCart } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)
    
        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            buyer: {...input},
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

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <div className='finalizado'>
                <h2 className="tituloCompra">Gracias por tu compra {input.name}!</h2>
                <h3 className="nCompra">Su numero de compra es {orderId}</h3>
                <div>
                    <Link to="/" className="inicio" onClick={() => clearCart()}>Volver al inicio</Link>
                </div>
            </div>  
        )
    }

    if (loading) {
        return <h1 className="procesando">Procesando compra</h1>
    }

    if (cart.length === 0) {
        return < Cart />
    }

    return (
        <>
        <div className="contenedorForm">
            <form onSubmit={handleSubmit}>
                <h2 className='title'>Complete el formulario</h2>
                <div className='columna'>
                    <label><input required className='black' placeholder="Nombre y apellido" type='text' onChange={handleChange} name="name" /></label>
                    <label><input required className='black' placeholder="Email" type='text' onChange={handleChange} name="mail" /></label>
                    <label><input required className='black' placeholder="Confirme el Email" type='text' onChange={handleChange}  name="mailConfirm" /></label>
                    <label><input required className='black' placeholder="Dirección de envío" type='text' onChange={handleChange} name="address"  /></label>
                    <label><input required className='black' placeholder="Teléfono" type="text" onChange={handleChange} name="phone"  /></label>
                    <div>
                        <button type="submit" onClick={() => createOrder()}  className="comprar" >Finalizar compra</button>
                    </div>
                </div>
            </form>
        </div>
            
        </>

    )
}

export default Form