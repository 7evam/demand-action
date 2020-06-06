import React from "react"
import { Link } from "gatsby"
import { TwitterVideoEmbed } from 'react-twitter-embed'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IncidentList = (props) => {

  const handlePhoneClick = () => {
    console.log(props.phoneNumber)
    console.log(props.phoneScript)
  }

  return (
    <div>
        <h1>{props.title}</h1>
        <TwitterVideoEmbed id={props.tweetId}/>
        {
          props.emailMessage ?
          <a href={`mailto:${props.emailAddress}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${props.emailMessage}`}>Open Email</a> 
          : null
        }
        {
          props.phoneScript ?
          <button onClick={handlePhoneClick}>Click for phone script</button>
          : null
        }
    </div>
  )
}

export default IncidentList