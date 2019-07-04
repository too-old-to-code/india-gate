import React, {useState, useEffect} from 'react'
import BurgerMenu from './burger-menu'
import BurgerMenuList from './burger-menu-list'
import withAppearOnScroll from './with-appear-on-scroll'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';


const ComposedMenu = () => {
  let BurgerMenuOnScrollUp = withAppearOnScroll(BurgerMenu, 'up')
  const [isActive, toggleActive] = useState(false)

  useEffect(() => {
    let targetElement = document.querySelector('.sidebar-menu')
    if (isActive) {
      disableBodyScroll(targetElement)
    } else {
      enableBodyScroll(targetElement)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  })

  return (
    <>

      <BurgerMenuList isActive={isActive} toggleActive={toggleActive} />
      {/*<BurgerMenuOnScrollUp
        initialPosition={{
          top: 0,
          left: 0,
          transform: 'translateY(-50px)',
          width: '50px',
          height: '50px',
          zIndex: '20',
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
        toggleActive={toggleActive}
        isActive={isActive}
      />*/}
      <BurgerMenu toggleActive={toggleActive} isActive={isActive}/>
    </>
  )
}

export default ComposedMenu