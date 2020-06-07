import React from "react"
import { Link } from "gatsby"
import { TwitterVideoEmbed } from 'react-twitter-embed'

import styled from 'styled-componenets'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ModalContainer = styled.div`
  background-color: grey;
  position: absolute;
  min-width: 640px;
  max-width: 900px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const PhoneModal = (props) => {

  const handlePhoneClick = () => {
    console.log(props.phoneNumber)
    console.log(props.phoneScript)
  }

  return (
    <ModalContainer>
        <h1>Call {props.phoneNumber}</h1>
        <p>{props.phoneScript}</p>
        <button onClick={() => props.setModalContent(false)}>Close</button>
    </ModalContainer>
  )
}

export default PhoneModal