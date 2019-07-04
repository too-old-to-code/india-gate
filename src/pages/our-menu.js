import './our-menu.scss'
import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/layout'
import FoodMenu from '../components/food-menu'
// import AnimateHeight from 'react-animate-height'
import SiteHeader from '../components/site-header'

const OurMenu = ({data}) => {


  return (
    <div>
      <SiteHeader heading="Our Menu" />
      <FoodMenu />
    </div>
  )
}

export default OurMenu
