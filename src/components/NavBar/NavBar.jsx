import { Component } from "react";
import logo from "../../assets/LogoTextoHorizontal.png";
import "./NavBar.css"; // Importa el archivo CSS

class NavBar extends Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="navbar">
                <a href="/" className="Logo">
                    <img src={logo} alt="Akala Logo" />
                </a>
                <div className="items">
                    <a href="/" className="NavItem">Inicio</a>
                    <a href="/" className="NavItem">Recursos</a>
                    <a href="/" className="NavItem">Nosotros</a>
                </div>
                <div className="profile">
                    <a href="/" className="NavItem">Ingresar</a>
                    <a href="/" className="NavItem">Registrarse</a>
                </div>
            </nav>
            </div>
        );
    }
}


export default NavBar;
