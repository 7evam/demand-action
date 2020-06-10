import PropTypes from "prop-types"
import React from "react"

import "./CallButton.scss"

const CallButton = ({ handlePhoneClick }) => (
  <button className="CallButton text-center" onClick={handlePhoneClick}>
    CALL
  </button>
)

export default CallButton
