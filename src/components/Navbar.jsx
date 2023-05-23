import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="App-header">
      <nav>
        <a href="#">
          <img src="slg-logo.svg" alt="Logo de Sergio Genes" />
          <h1>Sergio Genes</h1>
        </a>
        <ul>
          <li>
            <a href="#welcome-section">Acerca de mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
