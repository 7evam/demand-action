import React, {useState} from "react"
import { Link } from "gatsby"
import { TwitterVideoEmbed } from 'react-twitter-embed'

import styled from 'styled-componenets'
import PhoneModal from './PhoneModal'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Modal = styled.aside`
  background-color: grey;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const IncidentList = (props) => {

  const handlePhoneClick = () => {
    setModalContent(true)
  }

  const [modalContent, setModalContent] = useState(false)

  return (
    <div className="Incident col-12 md:col-6 my1 ">
      <h1 className="text-center mb1">{props.title}</h1>
      <div className="col-12" id="Incident__embed-wrapper">
        <TwitterVideoEmbed id={props.tweetId} />
      </div>
      <div className="Incident__link col-12 flex justify-center my_5">
        <a
          className=""
          href={`mailto:${props.emailAddress}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${props.emailMessage}`}
        >
          Open Email
        </a>
      </div>
    </div>
  )
}

export default IncidentList
