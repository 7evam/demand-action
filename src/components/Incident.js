import React from "react"
import { Link } from "gatsby"
import { TwitterVideoEmbed } from 'react-twitter-embed'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IncidentList = (props) => {

  return (
    <div>
        <h1>{props.title}</h1>
        <TwitterVideoEmbed id={props.tweetId}/>
        <a href={`mailto:${props.emailAddress}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${props.emailMessage}`}>Open Email</a> 
    </div>
  )
}

export default IncidentList