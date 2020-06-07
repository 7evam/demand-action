import React from "react"
import { Link } from "gatsby"
import { TwitterVideoEmbed } from 'react-twitter-embed'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IncidentList = (props) => {

  return (
    <div className="col-12 md:col-6 my1 ">
      <h1 className="text-center mb1">{props.title}</h1>
      <div className="col-12 flex items-center flex-col">
        <TwitterVideoEmbed id={props.tweetId} />
        <div className="Incident__link col-12 flex justify-center my_5">
          <a
            className=""
            href={`mailto:${props.emailAddress}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${props.emailMessage}`}
          >
            Open Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default IncidentList
