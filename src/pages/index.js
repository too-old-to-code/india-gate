import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import './index.scss'
import Image from '../components/image'
import SEO from '../components/seo'
import BackgroundImage from 'gatsby-background-image'
import FoodMenu from '../components/food-menu'
import Notifications from '../components/notifications'
import Img from 'gatsby-image'

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeHolder: allImageSharp {
  //       edges {
  //         node {
  //           fluid {
  //             originalName
  //             presentationWidth
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //     desktop: file(relativePath: { eq: "food.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 4160) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        logo {
          value {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
                presentationWidth
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  // const imageData = data.desktop.childImageSharp.fluid
  // const imageData = data.cockpitHome.background_image.value.childImageSharp.fluid
  const backgroundFluidImageStack = [
    data.cockpitHome.background_image.value.childImageSharp.fluid,
    // `linear-gradient(rgba(220, 15, 15, 0.3), rgba(4, 243, 67, 0.3))`
    // `linear-gradient(rgba(0, 15, 15, 0.6), rgba(4, 0, 17, 0.3))`,
    `linear-gradient(rgba(250, 250, 250, 0.6), rgba(250, 250, 250, 0.3))`,
  ].reverse()
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage fluid={backgroundFluidImageStack} style={{backgroundPosition: 'bottom left'}}>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', height: '100vh', alignItems: 'center', flexDirection: 'column', color: 'black'}}>
        <div className="logo-wrapper">
          <Img
             fluid={data.cockpitHome.logo.value.childImageSharp.fluid}
             style={{
               width: data.cockpitHome.logo.value.childImageSharp.fluid.presentationWidth
             }}
           />
        </div>
        <h1>India Gate</h1>
        <h2>Authentic Indian Cuisine</h2>
      </div>
      </BackgroundImage>
      <Notifications />
      <div
        dangerouslySetInnerHTML={{ __html: data.cockpitHome.introduction.value }}
        className="content-box"
      />
      <FoodMenu />
    </Layout>
  )
}

export default IndexPage
