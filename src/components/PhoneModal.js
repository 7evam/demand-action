import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'



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
  z-index: 10;
`


const PhoneModal = (props) => {

  const {modalInfo} = useSelector(state => ({
    ...state.modalReducer
  }))

  const handlePhoneClick = () => {
    console.log(props.phoneNumber)
    console.log(props.phoneScript)
  }

  return (
    <ModalContainer>
        <h1>Call {modalInfo.phoneNumber}</h1>
        <p>{modalInfo.phoneScript}</p>
        <button onClick={() => props.setModalContent(false)}>
          &times;
        </button>
    </ModalContainer>
  )
}

export default PhoneModal
