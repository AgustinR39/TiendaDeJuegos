import './NavBar.css'

const NavBar = () => {

    return(
        <nav className="navBar">
            <h1 className="titulo">E-C</h1>
            <ul className="menu">
                <li><a href="">Home</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Tienda</a></li>
            </ul>
        </nav>
    )
}

export default NavBar