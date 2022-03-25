import './NavBar.css'
import CardWidget from '../CardWidget/cardWidget'

const NavBar = () => {
    return(
        <nav className="navBar">
            <h1 className="titulo">E-C</h1>
            <ul className="menu">
                <li><button>Home</button></li>
                <li><button>Contacto</button></li>
                <li><button>Tienda</button></li>
            </ul>
            <CardWidget/>
        </nav>
    )
}

export default NavBar