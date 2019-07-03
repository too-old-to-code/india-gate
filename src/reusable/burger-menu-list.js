import './burger-menu-list.scss'
import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

const BurgerMenuList = ({isActive}) => (
  <div className={classnames("pure-menu sidebar-menu", { 'is-active': isActive })}>
    <ul className="pure-menu-list">
        <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
        <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Our Menu</Link></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gallery</a></li>
        <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About us</Link></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact us</a></li>
    </ul>
  </div>
)

export default BurgerMenuList