import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'
import { graphql, useStaticQuery } from "gatsby";


function Layout({ children }) {

  const data = useStaticQuery(graphql
    `query FooterInfo {
        site {
          siteMetadata {
            copyright }
         } 
    }`
   )

 return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p> &copy; {data.site.siteMetadata.copyright}</p>
      </footer>
    </div>
  )
}

export default Layout;
