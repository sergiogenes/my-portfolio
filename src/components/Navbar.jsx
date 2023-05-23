import React, { useEffect, useState } from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  let dropdown_menu;
  let icon;

  useEffect(() => {
    dropdown_menu = document.querySelector(".dropdown_menu");
    icon = document.querySelector(".menu-icon");
  }, [menu]);

  const menuHandler = (e) => {
    setMenu(!menu);
    menu
      ? (icon.style.backgroundImage = "url(close.svg)")
      : (icon.style.backgroundImage = "url(menu.svg)");
    dropdown_menu.classList.toggle("open");
  };

  console.dir(icon);
  return (
    <header className="App-header">
      <nav>
        <a href="#">
          <img src="slg-logo.svg" alt="Logo de Sergio Genes" />
          <h1>Sergio L Genes</h1>
        </a>
        <ul>
          <li>
            <a href="#">Acerca de mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <button className="menu-icon" onClick={menuHandler} />
        <div className="dropdown_menu">
          <li onClick={menuHandler}>
            <a href="#">Acerca de mí</a>
          </li>
          <li>
            <a onClick={menuHandler} href="#projects">
              Proyectos
            </a>
          </li>
          <li>
            <a onClick={menuHandler} href="#contact">
              Contacto
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
