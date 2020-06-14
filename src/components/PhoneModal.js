import React, {useEffect} from "react"
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

  // format phone script
  useEffect(() => {
    let formatted = modalInfo.phoneScript.replace(/BREAK/, <br/>);
    modalInfo.phoneScript = formatted
  }, [])


  return (
    <div>
      <div onClick={() => props.setModalContent(false)}>
        <ModalOverlay />
      </div>
      <div className="PhoneModal raleway">
        <div className="PhoneModal__button-container flex items-end justify-end col-12 mb1">
          <button className="PhoneModal__button"  onClick={() => props.setModalContent(false)}>&times;</button>
        </div>
        <h2 className="PhoneModal__headline mb1">
          Call {modalInfo.phoneNumber}
        </h2>
        <p className="PhoneModal__paragraph">{modalInfo.phoneScript}</p>
      </div>
    </div>
  )
}

export default PhoneModal
