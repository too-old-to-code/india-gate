import './index.scss'
import React, {useState} from 'react'
import BurgerMenu from '../reusable/burger-menu'
import BurgerMenuList from '../reusable/burger-menu-list'
import withAppearOnScroll from '../reusable/with-appear-on-scroll'
import CallButton from '../reusable/call-button'
import ComposedMenu from '../reusable/composed-menu'
import { Link } from 'gatsby'
// const MenuContext = React.createContext({})
// export const MenuProvider = MenuContext.Provider
// export const MenuConsumer = MenuContext.Consumer
const activeStyle = {
  textDecoration: 'underline'
}
const Layout = ({children, callButton = true, location}) => {

  let BurgerMenuOnScrollUp = withAppearOnScroll(BurgerMenu, 'up')
  let CallButtonOnScrollDown = withAppearOnScroll(CallButton, 'down')
  let pageSlug = location.pathname

  return (
    <React.Fragment>
      <div className={"pure-menu pure-menu-horizontal"}>
        <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link
                to="/"
                className="pure-menu-link"
                activeStyle={activeStyle}
                >
                  Home
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link
                to="/our-menu"
                className="pure-menu-link"
                activeStyle={activeStyle}
                >
                  Our Menu
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link
                to="/"
                className="pure-menu-link"
                activeStyle={activeStyle}
                >
                  Gallery
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link
                to="/about"
                className="pure-menu-link"
                activeStyle={activeStyle}
                >
                  About us
              </Link>
            </li>
            <li className="pure-menu-item">
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
      <ComposedMenu />
      {
        callButton && <CallButtonOnScrollDown
          initialPosition={{
            bottom: 0,
            transform: 'translateY(50px)',
            width: '100%',
            height: '50px'
          }}
        />
      }
      {children}
      {
        callButton && <div style={{height: '50px'}}/>
      }
    </React.Fragment>
  )
}

export default Layout
