import './about.scss'
import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SiteHeader from '../components/site-header'

const AboutPage = ({ data }) => {
  return (
    <div>
      <SiteHeader heading="About Us" />
      <Img
        fluid={data.cockpitAbout.picture_1.value.childImageSharp.fluid}
        style={{
          width: '100%'
        }}
      />
      <div
        className="about-text"
        dangerouslySetInnerHTML={{ __html: data.cockpitAbout.text.value }}
      />
      <Img
        fluid={data.cockpitAbout.picture_2.value.childImageSharp.fluid}
        style={{
          width: '100%'
        }}
      />
    </div>
  )
}

export default AboutPage

export const query = graphql`
query MyQuery {
  cockpitAbout {
    text {
      value
    }
    picture_1 {
      value {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    picture_2 {
      value {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
