import './navbar-midpage.scss'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'
import classnames from 'classnames'

const NavbarMidpage = props => {
  let lastScrollTop = 0
  const [visible, setVisible] = useState(false)

  const handleScroll = throttle(({target}) => {
    let currentScroll = target.scrollTop || target.documentElement.scrollTop
    setVisible(currentScroll > 800 && lastScrollTop > currentScroll)
    lastScrollTop = currentScroll
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={classnames('navbar', 'navbar-midpage', { visible })}>
      {props.children}
    </div>
  )
}

NavbarMidpage.propTypes = {
  children: PropTypes.object
}

export default NavbarMidpage