import React from "react"
import { Link } from "gatsby"
import {useSelector, useDispatch} from 'react-redux'

import ModalOverlay from "../components/base/ModalOverlay"


const PhoneModal = (props) => {

  const {modalInfo} = useSelector(state => ({
    ...state.modalReducer
  }))

  const handlePhoneClick = () => {
    console.log(props.phoneNumber)
    console.log(props.phoneScript)
  }

  return (
    <div>
      <div onClick={() => props.setModalContent(false)}>
        <ModalOverlay />
      </div>
      <div class="PhoneModal">
        <button onClick={() => props.setModalContent(false)}>&times;</button>
        <h1>Call {modalInfo.phoneNumber}</h1>
        <p>{modalInfo.phoneScript}</p>
      </div>
    </div>
  )
}

export default PhoneModal
