import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from '../../styles/project.module.css'
import Img from "gatsby-image"

function Project({ data }) {
  const pro = data.allMarkdownRemark.nodes
  const contact = data.site.siteMetadata.contact

  console.log(data)

  return (
    <Layout>
      <div id="project" className={styles.portfolio}>
        <h2>Titre des projets</h2>
        <h3> Page des Projets </h3>
        <div className={styles.projet}>
          {pro.map(pros => (
            <Link className={styles.images} to={`/project/${pros.frontmatter.slug}`} key={pros.id}>
            <div>
              <Img fluid={pros.frontmatter.thumb.childImageSharp.fluid}/>
               <h3>{pros.frontmatter.title}</h3>
               <p>Stack : {pros.frontmatter.stack}</p>
            </div>
       </Link>))}
       </div>
       <p>Vous aimez ce que vous voyez ? Envoyez un un {contact}</p>
      </div>
    </Layout>
  )
}
export default Project;
// exports des pages MD
export const query = graphql`
query MesProjets {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
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
 }`