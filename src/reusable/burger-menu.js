import './burger-menu.scss'
import React, { useState } from 'react'
import BurgerMenuList from '../reusable/burger-menu-list'

const BurgerMenu = ({isActive, toggleActive}) => {
  // console.log(toggleActive)
  const [isActivator, toggleActivator] = useState(false)
  // console.log(props.test)
  return (
    <a
      href="#"
      aria-pressed={isActive}
      role="button"
      onClick={(e) => {
        e.preventDefault()
        toggleActive(!isActive)
        toggleActivator(!isActivator)
      }}
      className={`hamburger hamburger--collapse ${ isActive ? 'is-active' : ''}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </a>
  )
}

export default BurgerMenu