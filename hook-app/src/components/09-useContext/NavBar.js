import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            {/* <ul> */}
                {/* <li><a href="/">Home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/login">login</a></li> */}

                {/* componente Link para poder navegar en nuestras rutas sin recargar la pagina */}
                {/* <li> <Link to="/">Home</Link> </li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/login">login</Link></li> */}

            {/* </ul> */}

            <a className="navbar-brand" href="#">useContext</a>
            <ul className="navbar-nav">
                {/* al usar el navlink podemos ponerle una clase cuando navegamos y nos encontramos en la ruta como el active, usamos el exact para que se especifique fuertemente el path con la ruta  */}

                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                </li>
            </ul>

        </nav>


       

    )
}
