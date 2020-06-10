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
      <div className="Layout px2">
        <p className="Layout__paragraph  text-center">
          Many people have been horrified by the display of police brutality all
          accross the country these last few weeks but most elected officials
          apallingly don't even know what's going on. Demand them all to
          acknowledge reality and defund the police without spending hours of
          your own time by using these pre-written email templates or calling
          them with these phone scripts.
        </p>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
