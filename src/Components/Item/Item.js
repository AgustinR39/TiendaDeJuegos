import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img}) => {
    return(
        <section className='card_item'>
            <picture>
                <img className="portada" src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <div className='detal'>
                <Link to={`/detail/${id}`} className='btn_detalles'>Ver detalles</Link>
            </div>
        </section>
    )
}

export default Item