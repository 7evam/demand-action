import React from "react"
import { Link } from "gatsby"

import Incident from '../components/Incident'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IncidentList = (props) => {

  return (
    <div>
        {
        props.incidents.map((incident,index) => 
          <Incident title={incident.node.title} tweetId={incident.node.tweetId} 
          emailAddress={incident.node.emailAddress} emailMessage={incident.node.emailMessage}/>
        )}
    </div>
  )
}

export default IncidentList