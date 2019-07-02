import 'hamburgers'
import React, { useState } from 'react'

const Navbar = () => {
  const [isActive, toggleActive] = useState(false)
  return (
    <div>
    <div className="app-navbar">
    <a
      href="#"
      aria-pressed={isActive}
      role="button"
      onClick={() => { toggleActive(!isActive) }}
      className={`hamburger hamburger--spin ${ isActive ? 'is-active' : ''}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </a>
    </div>
      <div className={`pure-menu custom-restricted-width ${isActive ? 'is-active' : ''}`}>

        <ul className="pure-menu-list">
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Menu</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gallery</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">About us</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar