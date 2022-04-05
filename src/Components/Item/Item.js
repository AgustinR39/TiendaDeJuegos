import './Item.css'

const Item = ({name, img}) => {
    return(
        <section className='card'>
            <picture>
                <img className="portada" src={img} alt={name}/>
            </picture>
            <h4>{name}</h4>
            <button className='btn'>Ver detalles</button>
        </section>
    )
}

export default Item