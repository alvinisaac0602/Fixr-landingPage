import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/">
          Fixr<span>.</span>
        </Link>
      </div>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link className="brand-cta" to="/contact">
        Book Now
      </Link>
    </header>
  )
}

export default Navbar
