import React from "react"
import { Link } from "gatsby"
import { TwitterVideoEmbed } from 'react-twitter-embed'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IncidentList = (props) => {

  return (
    <div className="col-12 md:col-6 my1 flex items-center flex-col">
      <h1 className="text-center mb1">{props.title}</h1>
      <div className="col-12">
        <TwitterVideoEmbed id={props.tweetId} />
      </div>
      <div className="col-12 flex items-start">
        <a
          className="block my_5"
          href={`mailto:${props.emailAddress}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${props.emailMessage}`}
        >
          Open Email
        </a>
      </div>
    </div>
  )
}

export default IncidentList
