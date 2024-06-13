import React, { Component } from "react";
import logo from "../../assets/LogoTextoHorizontal.png";
import "./Footer.css"; // Importa el archivo CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Sección "Contáctanos" */}
            <div className="col-md-4">
              <div className="contact-box">
                <h3 className="contactaTxt">Contáctanos</h3>
                <ul className="social-icons contactaTxt">
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} /> @akala
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} /> Akala
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} /> Akala
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección "Colabora con nosotros" */}
            <div className="colabora">
              <h3 className="colaboraTxt">Colabora con nosotros</h3>
              <ul className="colaboraTxt">
                <li>Ayudar con el desarrollo</li>
                <li>Ayudar con donaciones</li>
                <li>Comparte la iniciativa</li>
              </ul>
            </div>

            {/* Sección de imagen y texto */}
            <div className="loguito">
              <img src={logo} alt="Akala Logo" className="logo" />
            </div>
          </div>
        </div>
        <p className="description">
          @Akala es un proyecto de código abierto que puedes apoyar.
        </p>
      </footer>
    );
  }
}

export default Footer;
