import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import IncidentList from "../components/IncidentList"
import PhoneModal from '../components/PhoneModal'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {

  const [modalContent, setModalContent] = useState(false)

  const incidents = props.data.allMongodbActionIncidents.edges;
  
  return (
    <>
    {
      modalContent && modalContent !== null ?
      <PhoneModal setModalContent={setModalContent}/>
      : null
    }
  <Layout>
    <SEO title="Home" />
    <IncidentList incidents={incidents} setModalContent={setModalContent}/>
  </Layout>
  </>
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
          phoneScript
          phoneNumber
        }
      }
    }
  }
`
