import React, {useState} from "react"
import { Link } from "gatsby"
import { TwitterTweetEmbed } from 'react-twitter-embed'

import {useDispatch} from 'react-redux'

import styled from 'styled-components'
import PhoneModal from './PhoneModal'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Modal = styled.aside`
  background-color: grey;
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const IncidentList = (props) => {

  const dispatch = useDispatch()

  const handlePhoneClick = () => {
    dispatch({
      type: "SHOW_MODAL",
      payload: {
        modalInfo: {
          phoneScript: props.phoneScript,
          phoneNumber: props.phoneNumber
        }
      }
    })
    props.setModalContent(true)
  }

  console.log('here is props in icn')
  console.log(props)

  return (
    <div className="Incident col-12 md:col-6 my1 ">
      <h1 className="text-center mb1">{props.title}</h1>
      <div className="col-12" id="Incident__embed-wrapper">
        {
          props.incident && props.incident.twitterIds && props.incident.twitterIds.length >= 1 ?
          props.incident.twitterIds.map((tweetId, index) => (
            <TwitterTweetEmbed tweetId={tweetId} />
          )) : null
        }
      </div>
      <div className="Incident__link col-12 flex justify-center my_5">
        <a
          className=""
          href={`mailto:${props.incident.node.emailAddress}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${props.incident.node.emailMessage}`}
        >
          Open Email
        </a>
        {
          props.phoneScript ?
          <button onClick={handlePhoneClick}>Open Phone Script</button>
          : null
        }
      </div>

      {
          props.incident && props.incident.links && props.incident.links.length >= 1 ?
          <>
          <p>Other Links</p>
          {
          props.incident.links.map((link, index) => (
            <a href={link}>{link}</a>
          )) 
            }
          </>: null
        }
    </div>
  )
}

export default IncidentList