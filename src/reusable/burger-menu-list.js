import './burger-menu-list.scss'
import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'


const BurgerMenuList = ({isActive, toggleActive, location}) => {
  const activeStyle = {
    color: 'white'
  }
  const doit = (e) => {
    e.preventDefault()
    toggleActive(false)
  }
  return <div className={classnames("pure-menu sidebar-menu", { 'is-active': isActive })}>
    <ul className="pure-menu-list">
        <li className="pure-menu-item" onClick={doit}>
          <Link
            to="/"
            className="pure-menu-link"
            activeStyle={activeStyle}
            >
              Home
          </Link>
        </li>
        <li className="pure-menu-item" onClick={doit}>
          <Link
            to="/our-menu"
            className="pure-menu-link"
            activeStyle={activeStyle}
            >
              Our Menu
          </Link>
        </li>
        <li className="pure-menu-item" onClick={doit}>
          <Link
            to="/"
            className="pure-menu-link"
            activeStyle={activeStyle}
            >
              Gallery
          </Link>
        </li>
        <li className="pure-menu-item" onClick={doit}>
          <Link
            to="/about"
            className="pure-menu-link"
            activeStyle={activeStyle}
            >
              About us
          </Link>
        </li>
        <li className="pure-menu-item" onClick={doit}>
          <Link
            to="/contact-us"
            className="pure-menu-link"
            activeStyle={activeStyle}
            >
              Contact us
          </Link>
        </li>
    </ul>
  </div>
}

export default BurgerMenuList