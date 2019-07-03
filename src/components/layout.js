import './layout.scss'
import React, {useState} from 'react'
import BurgerMenu from '../reusable/burger-menu'
import BurgerMenuList from '../reusable/burger-menu-list'
import withAppearOnScroll from '../reusable/with-appear-on-scroll'
import CallButton from '../reusable/call-button'
import ComposedMenu from '../reusable/composed-menu'
// const MenuContext = React.createContext({})
// export const MenuProvider = MenuContext.Provider
// export const MenuConsumer = MenuContext.Consumer

const Layout = ({children, callButton = true}) => {
  let BurgerMenuOnScrollUp = withAppearOnScroll(BurgerMenu, 'up')
  let CallButtonOnScrollDown = withAppearOnScroll(CallButton, 'down')
  // const [val, toggle] = useState('test')

      // <BurgerMenuList/>
      // <BurgerMenu test="othertezt"/>
      // <BurgerMenuOnScrollUp
      //   initialPosition={{
      //     top: 0,
      //     left: 0,
      //     transform: 'translateY(-50px)',
      //     width: '50px',
      //     height: '50px'
      //   }}
      //   test={val}
      // />
  return (
    <React.Fragment>
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
