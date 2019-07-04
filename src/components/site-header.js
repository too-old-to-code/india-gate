import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const SiteHeader = ({heading}) => {
  let data = useStaticQuery(graphql`
    query {
      cockpitHome {
        background_image {
          value {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }

      }
    }
  `)

  const backgroundFluidImageStack = [
    data.cockpitHome.background_image.value.childImageSharp.fluid,
    `linear-gradient(rgba(250, 250, 250, 0.8), rgba(250, 250, 250, 0.4))`,
  ].reverse()

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      className="page-header"
    >
      <h2 className="page-heading">{heading}</h2>
    </BackgroundImage>
  )
}

export default SiteHeader