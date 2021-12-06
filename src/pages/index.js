import { Link, graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

function Home({ data }) {

  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.text}>
          <h1>Developpeur Full Stack Javascript</h1>
          <h2>Developpement et Création</h2>
          <p>39 ans <br />
            Grasse, Région PACA <br />
            <a href={`mailto:${data.site.siteMetadata.contact}`}>jeffvanstraelen@gmail.com</a></p>
          <p>{data.site.siteMetadata.history}</p>
          <Link className={styles.btn} to="/project">Mes Projets</Link>
        </div>
        <div className={styles.image}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </section>
    </Layout>
  )
}

export default Home;
export const query = graphql`
query Contact { 
  site {
    siteMetadata {
      contact
      history
    }
  }
  file(relativePath: {eq: "profile.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`
