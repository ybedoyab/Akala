import { Component } from "react";
import logo from "../../assets/LogoTextoHorizontal.png";
import { FaUser } from "react-icons/fa";
import "./NavBar.css"; // Importa el archivo CSS

class NavBar extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <a href="/" className="nav-bar__logo">
                    <img src={logo} alt="Akala Logo" />
                </a>
                <ul className="nav-bar__links">
                    <li>
                        <a href="/" className="nav-bar__item" id="active">Inicio</a>
                    </li>
                    <li>
                        <a href="/" className="nav-bar__item">Recursos</a>
                    </li>
                    <li>
                        <a href="/" className="nav-bar__item">Nosotros</a>
                    </li>
                </ul>
                <ul className="nav-bar__links-profile">
                    <li>
                        <FaUser/>
                        <a href="/" className="nav-bar__item">
                            Ingresar
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-bar__item">Registrarse</a>
                    </li>
                </ul>
            </nav>
        );
    }
}


export default NavBar;
