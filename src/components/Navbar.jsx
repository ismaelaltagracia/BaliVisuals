import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <a href="#inicio" className="navbar__logo">
          <img src="/logo-blanco-rojo.svg" alt="Bali Visuals" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar__links">
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#portafolio" onClick={() => setMenuOpen(false)}>Portafolio</a></li>
          </ul>
        </nav>

        <a href="#contacto" className="navbar__cta">Contáctanos</a>

        <button
          className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
