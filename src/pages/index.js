import React from "react"
import { Link, graphql } from "gatsby"
import IncidentList from "../components/IncidentList"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {

  const incidents = props.data.allMongodbActionIncidents.edges;

  return (
  <Layout>
    <SEO title="Home" />
    <IncidentList incidents={incidents}/>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbActionIncidents {
      edges {
        node {
          title
          tweetId
          emailMessage
          emailAddress
        }
      }
    }
  }
`
