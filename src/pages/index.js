import React from "react"
import { graphql } from "gatsby"
import Coach from "../components/coach"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles.css"
import { Hero } from "../components/hero"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Coach content={props} />
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
  }
`
