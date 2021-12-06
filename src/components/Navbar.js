import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

function Navbar() {
   const data = useStaticQuery(graphql
    `query Info {
        site {
          siteMetadata {
            title }
         } 
    }`
   )

    return (
        <nav>
            <h1>{data.site.siteMetadata.title}</h1>
            <div className="navbarlinks">
                <Link to="/">Acceuil</Link>
                <Link to="/project">Portfolio</Link>
                <Link to="/about">Compétences</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;