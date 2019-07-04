import React from "react"
import { graphql, Link } from 'gatsby'
import HygieneRating from '../components/hygiene-rating'
import Layout from '../components/layout'
import './index.scss'
import Image from '../components/image'
import SEO from '../components/seo'
import BackgroundImage from 'gatsby-background-image'
import Notifications from '../components/notifications'
import Img from 'gatsby-image'

// const BackgroundImage = require('gatsby-background-image')
const IndexPage = ({data, location, loading}) => {
  const backgroundFluidImageStack = [
    data.cockpitHome.background_image.value.childImageSharp.fluid,
    `linear-gradient(rgba(250, 250, 250, 0.6), rgba(250, 250, 250, 0.6))`,
  ].reverse()

  return (
    <div>
      <SEO title="Home" />
      <BackgroundImage fluid={backgroundFluidImageStack} style={{backgroundPosition: 'bottom left'}}>

      <div style={{display: 'flex', width: '100%', justifyContent: 'center', height: '100vh', alignItems: 'center', flexDirection: 'column', color: 'black'}}>
        <div className="logo-wrapper">
          <Img
              fadeIn={false}
              onLoad={() => console.log(`hello`)}
              draggable={false}
              fluid={data.cockpitHome.logo.value.childImageSharp.fluid}
              style={{
                width: data.cockpitHome.logo.value.childImageSharp.fluid.presentationWidth / 2
              }}
           />
        </div>
        <h1>The <br/>India Gate</h1>
        <h2>Authentic Indian Cuisine</h2>
      </div>
      </BackgroundImage>
      <div
        dangerouslySetInnerHTML={{ __html: data.cockpitHome.introduction.value }}
        className="content-box"
      />
      <Notifications />
      <HygieneRating rating={0}/>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    cockpitHome {
      introduction {
        value
      }
      background_image {
        value {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      logo {
        value {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              presentationWidth
            }
          }
        }
      }
    }
  }
`
