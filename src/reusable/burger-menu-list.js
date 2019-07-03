import './burger-menu-list.scss'
import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

const BurgerMenuList = ({isActive, toggleActive}) => (
  <div className={classnames("pure-menu sidebar-menu", { 'is-active': isActive })}>
    <ul className="pure-menu-list">
        <li className="pure-menu-item" onClick={() => toggleActive(false)}>
          <Link to="/" className="pure-menu-link">Home</Link>
        </li>
        <li className="pure-menu-item" onClick={() => toggleActive(false)}>
          <Link to="/our-menu" className="pure-menu-link">Our Menu</Link>
        </li>
        <li className="pure-menu-item" onClick={() => toggleActive(false)}>
          <a href="#" className="pure-menu-link">Gallery</a>
        </li>
        <li className="pure-menu-item" onClick={() => toggleActive(false)}>
          <Link to="/about" className="pure-menu-link">About us</Link>
        </li>
        <li className="pure-menu-item" onClick={() => toggleActive(false)}>
          <Link to="contact-us" className="pure-menu-link">Contact us</Link>
        </li>
    </ul>
  </div>
)

export default BurgerMenuList