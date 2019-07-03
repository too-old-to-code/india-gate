import './with-appear-on-scroll.scss'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'
import classnames from 'classnames'
const SCROLL_HEIGHT = 400


const withAppearOnScroll = (Component, direction) => {

  const style = ({initialPosition, isActive}, visible, scrollTop) => {
    console.log(scrollTop)
    return visible || isActive && (scrollTop >= SCROLL_HEIGHT)
      ? { ...initialPosition, transform: 'translateX(0) translateY(0)'}
      : initialPosition
  }

  return (props) => {
    // let lastScrollTop = 0
    const [scrollTop, setScrollTop] = useState(0)
    const [visible, setVisible] = useState(false)
    // const [keepShowing, setKeepShowing] = useState(false)
    console.log(props)


    const handleScroll = throttle(({target}) => {
      const currentScroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
      if (direction === 'down') {
        setVisible(currentScroll > SCROLL_HEIGHT && scrollTop < (currentScroll))
      } else {
        setVisible(currentScroll > SCROLL_HEIGHT && scrollTop > currentScroll)
      }
      // console.log(scrollTop)
      // lastScrollTop = currentScroll
      setScrollTop(currentScroll)
    })

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
      <span
        className={classnames('appear-on-scroll', { visible: visible || props.isActive })}
        style={ style(props, visible, scrollTop) }
      >
        <Component {...props} />
      </span>
    )
  }
}

export default withAppearOnScroll