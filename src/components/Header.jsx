import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img from '../assets/Logo (1).png'
import { SearchIcon } from './Icons'

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="logo">
          <img src={img} alt="Interno logo" />
          <span className="logo__text">Interno</span>
        </Link>

        <nav className="nav">
          <NavLink className="nav__link" to="/">Home</NavLink>
          <NavLink className="nav__link" to="/about">About</NavLink>
          <NavLink className="nav__link" to="/services">Services</NavLink>
          <NavLink className="nav__link" to="/projects">Projects</NavLink>
          <NavLink className="nav__link" to="/blog">Blog</NavLink>
          <NavLink className="nav__link" to="/contact">Contact</NavLink>
          <button className="nav__search" type="button" aria-label="Search">
            <SearchIcon />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
