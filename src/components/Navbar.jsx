import React, { useEffect, useState } from 'react'

import '../styles/Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(true)
  const [dropdownMenu, setDropdownMenu] = useState('')
  const [icon, setIcon] = useState('')

  useEffect(() => {
    setDropdownMenu(document.querySelector('.dropdownMenu'))
    setIcon(document.querySelector('.menuIcon'))
  }, [menu])

  const menuHandler = (e) => {
    setMenu(!menu)
    menu
      ? (icon.style.backgroundImage = 'url(close.svg)')
      : (icon.style.backgroundImage = 'url(menu.svg)')
    dropdownMenu.classList.toggle('open')
  }

  return (
    <header className='appHeader'>
      <nav>
        <a href='#welcome-section'>
          <img
            src='slg-logo.svg'
            alt='Logo de Sergio Genes'
          />
          <h1>Sergio L Genes</h1>
        </a>
        <ul>
          <li>
            <a href='#about'>Acerca de mí</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
          <li>
            <a href='#contact'>Contacto</a>
          </li>
        </ul>
        <button
          className='menuIcon'
          onClick={menuHandler}
        />
        <div className='dropdownMenu'>
          <li onClick={menuHandler}>
            <a href='#welcome-section'>Home</a>
          </li>
          <li onClick={menuHandler}>
            <a href='#about'>Acerca de mí</a>
          </li>
          <li>
            <a
              onClick={menuHandler}
              href='#projects'
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              onClick={menuHandler}
              href='#contact'
            >
              Contacto
            </a>
          </li>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
