import './with-appear-on-scroll.scss'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'
import classnames from 'classnames'

const style = ({initialPosition}, visible) => {
  return visible
    ? { ...initialPosition, transform: 'translateX(0) translateY(0)'}
    : initialPosition
}

const withAppearOnScroll = (Component, direction) => {
  return React.memo((props) => {
    let lastScrollTop = 0
    const [visible, setVisible] = useState(false)

    const handleScroll = throttle(({target}) => {
      const currentScroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
      // let currentScroll = target.scrollTop || target.documentElement.scrollTop || target.scrollingElement.scrollTop
      // let currentScroll = target.scrollY || target.documentElement.scrollTop || target.scrollingElement.scrollTop
      if (direction === 'down') {
        setVisible(currentScroll > 400 && lastScrollTop < (currentScroll))
      } else {
        setVisible(currentScroll > 400 && lastScrollTop > currentScroll)
      }
      lastScrollTop = currentScroll
    })

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <span
        className={classnames('appear-on-scroll', { visible })}
        style={ style(props, visible) }
      >
        <Component {...props} />
      </span>
    )
  }, () => false)
}

export default withAppearOnScroll