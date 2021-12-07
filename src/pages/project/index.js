import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from '../../styles/project.module.css'
import Img from "gatsby-image"

function Project({ data }) {
  const pro = data.allMarkdownRemark.nodes
  const contact = data.site.siteMetadata.contact

  return (
    <Layout>
      <div id="project" className={styles.portfolio}>
        <h2>Réalisations</h2>
        <h3> Projets </h3>
        <div className={styles.projet}>
          {pro.map(pros => (
            <Link className={styles.images} to={`${pros?.frontmatter?.slug}`} key={pros.id}>
            <div>
               <Img fluid={pros?.frontmatter?.thumbs?.childImageSharp?.fluid}/> 
               <h4>{pros?.frontmatter?.title}</h4>
               <p>Stack : {pros?.frontmatter?.stack}</p>
            </div>
       </Link>))}
       </div>
       <p>Vous aimez ce que vous voyez ? Envoyez un mails à {contact}</p>
      </div>
    </Layout>
  )
}
export default Project;
// exports des pages MD
export const query = graphql` 
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(MD-projects)/"}}) {
    nodes {
      frontmatter {
        date
        title
        stack
        slug
        thumbs {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      contact
    }
  }
}

`