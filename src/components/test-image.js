import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const TestImage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const backgroundFluidImageStack = [
    data.cockpitHome.background_image.value.childImageSharp.fluid,
    // `linear-gradient(rgba(220, 15, 15, 0.3), rgba(4, 243, 67, 0.3))`
    // `linear-gradient(rgba(0, 15, 15, 0.6), rgba(4, 0, 17, 0.3))`,
    `linear-gradient(rgba(250, 250, 250, 0.6), rgba(250, 250, 250, 0.6))`,
  ].reverse()

  return (
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
  )
}

export default TestImage