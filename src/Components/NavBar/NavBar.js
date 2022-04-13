import './NavBar.css'
import CardWidget from '../CardWidget/cardWidget'
import { useState ,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../asynmock'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return(
        <nav className="navBar">
            <Link className='titulo' to='/'>
                <h1>E-C</h1>
            </Link>
            <div className='menu'>
                {categories.map(cat => <NavLink className='option' key={cat.id} to={`category/${cat.id}`}>{cat.description}</NavLink>)}
            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar