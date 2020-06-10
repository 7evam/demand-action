import React, {useState} from "react"
import { Link } from "gatsby"
import { TwitterTweetEmbed } from 'react-twitter-embed'
import cx from "classnames"

import {useDispatch} from 'react-redux'

import styled from 'styled-components'
import PhoneModal from './PhoneModal'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import EmailButton from "../components/base/EmailButton"
import CallButton from "../components/base/CallButton"

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

  let callButtonMarkup;

  if (props.phoneScript) {
    callButtonMarkup = <CallButton handlePhoneClick={handlePhoneClick} />;
  } else {
    callButtonMarkup = null;
  }

  return (
    <div className="Incident col-12 md:col-6 my1 ">
      <h2 className="mb1">{props.title}</h2>
      <div className="col-12" id="Incident__embed-wrapper">
        {props.incident &&
        props.incident.twitterIds &&
        props.incident.twitterIds.length >= 1
          ? props.incident.twitterIds.map((tweetId, index) => (
              <TwitterTweetEmbed tweetId={tweetId} />
            ))
          : null}
      </div>
      <div className="Incident__link col-12 flex justify-center my_5">
        <div
          className={cx({ 'mr_5': callButtonMarkup !== null }) }
        >
          {callButtonMarkup}
        </div>

        <div className="ml_5">
          <EmailButton
            href={props.incident.node.emailAddress}
            message={props.incident.node.emailMessage}
          />
        </div>
      </div>

      {props.incident &&
      props.incident.links &&
      props.incident.links.length >= 1 ? (
        <>
          <p>Other Links:</p>
          <ul>
            {props.incident.links.map((link, index) => (
              <li key={index}>
                <a href={link}>link {index + 1}</a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

export default IncidentList
