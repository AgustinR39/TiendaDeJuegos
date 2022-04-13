import Counter from "../Counter/Counter"
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    
    return (
        <div className="card_detail">
            <picture>
                <img src={img} className="portada" alt={name} />
            </picture>
            <div>
                <h4>{name}</h4>
                <h6 className="card_text">Categoria: {category}</h6>
                <h6 className="card_text">Descripcion: {description}</h6>
                <h6 className="card_text">Precio: ${price}</h6>
                <Counter/>
            </div>
        </div>
    )
}

export default ItemDetail