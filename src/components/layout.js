/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"

import Header from "./header"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={"Demand Action"} />
      <div className="Layout px2 raleway">
        <p className="Layout__paragraph  text-center">
          Many people have been horrified by the display of police brutality all
          accross the country these last few weeks but most elected officials
          apallingly don't even know what's going on. Demand them all to
          acknowledge reality and defund the police by using these pre-written email templates and phone scripts.
          You may use these as a starting point or just fill in the blanks.
        </p>
        <p className="Layout__paragraph  text-center">This site uses the <a href="https://2020policebrutality.netlify.app/">2020 Police Brutality API</a> and is intended to grow very easily. To 
        add a new incident to this site, please email <a href="mailto:demandactionsubmit@gmail.com">demandactionsubmit@gmail.com</a> with the id of the event in the police brutality API and a short description of what happened. 
        Also feel free to email with any other ideas you may have with this site as it was created with the itention of being flexible for any kind of 
        phone or email template. If you want to check out the code you can view it <a href="https://github.com/7evam/demand-action">here</a>.</p>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
