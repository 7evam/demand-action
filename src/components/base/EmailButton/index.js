import PropTypes from "prop-types"
import React from "react"

import "./EmailButton.scss"

const EmailButton = ({href, message}) => (
  <a
    href={`mailto:${href}?subject=Example%20Of%20Unnecessary%20Police%20Force&body=${message}`}
    className="EmailButton text-center block"
  >SEND EMAIL</a>
)

EmailButton.propTypes = {
  href: PropTypes.string,
  message: PropTypes.string,
}

EmailButton.defaultProps = {
  href: `#`,
  messsage: `Demanding Action`
}

export default EmailButton
