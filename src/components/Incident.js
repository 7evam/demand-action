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
    <div>
      {
        modalContent && modalContent !== null ?
        <Modal>
          <PhoneModal setModalContent={setModalContent}/>
        </Modal>
        : null
      }
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