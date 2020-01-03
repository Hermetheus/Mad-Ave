import React from "react"
import { graphql } from "gatsby"
import Coach from "../components/Coach"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import "./styles.css"
import { Hero } from "../components/Hero"
import Footer from "../components/Footer"

const IndexPage = (props, index) => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Coach content={props} key={index} />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulMadAveCoaches {
      edges {
        node {
          id
          name
          description {
            description
          }
          image {
            fluid(maxWidth: 1260) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulMadAveMenu {
      edges {
        node {
          item
          category
        }
      }
    }
  }
`
