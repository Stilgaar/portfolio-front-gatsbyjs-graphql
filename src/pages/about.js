import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project.module.css"
import { graphql } from "gatsby"

function About({ data }) {
  console.log(data.allMarkdownRemark.nodes)

  return (
    <Layout>
      <div className={styles.portfolio}>

        <h2>Compétences</h2>

        {data?.allMarkdownRemark?.nodes?.map(data => (
          <div className={styles.element}>
            <h3>{data?.frontmatter?.titres}</h3>

            <div className={styles.textes}>
            {data?.frontmatter?.details?.map((detail) =>
            <p>{detail}</p>)}
            </div>

            <div className={styles.image}>
            {data?.frontmatter?.thumb?.map((images) => 
            <img src={images?.childImageSharp?.fixed?.src} alt="yhea" />
            )}

            </div>

          </div>
        ))}
      </div>
    </Layout>
  )
}

export default About
export const query = graphql`
  query Competences {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(MD-competences)/" } }
      sort: {fields: frontmatter___position, order: ASC}
    ) {
      nodes {
        frontmatter {
          titres
          details
          thumb {
            childImageSharp {
              fixed {
                src
              }         
            }
          }
        }
      }
    }
  }
`
