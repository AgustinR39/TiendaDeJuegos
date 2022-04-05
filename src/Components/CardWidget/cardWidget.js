import './cardWidget.css'

const CardWidget = () => {
    return(
        <div className='carritoDiv'>
            <img src={'./imagenes/carrito.png'} className="carrito" alt="logo" />
            <p className='n'>0</p>
        </div>
    )
}

export default CardWidget