import './burger-menu.scss'
import React, { useState } from 'react'

const BurgerMenu = ({isActive, toggleActive}) => {

  const [isActivator, toggleActivator] = useState(false)

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