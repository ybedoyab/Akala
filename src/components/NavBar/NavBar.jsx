import React, { Component } from "react";
import logo from "../../assets/LogoTextoHorizontal.png";
import "./NavBar.css"; // Importa el archivo CSS

class NavBar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <a href="/" className="Logo">
                    <img src={logo} alt="Akala Logo" />
                </a>
                <div className="centrar">
                    <a href="/" className="NavItem">Inicio</a>
                    <a href="/" className="NavItem">Recursos</a>
                    <a href="/" className="NavItem">Nosotros</a>
                </div>
            </nav>
        );
    }
}


export default NavBar;
