// import './ItemList.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemListDetail = ({products}) => {
    return(
        <div className='contenedor_detail'>
            {products.map(prod => <ItemDetail key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemListDetail