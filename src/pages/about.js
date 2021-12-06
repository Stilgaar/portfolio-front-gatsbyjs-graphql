import React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/project.module.css'

function About() {

    return (
        <Layout>
        <div className={styles.portfolio}>
            <h2>A Propos</h2>
            <p>Je m'appelle Jeff, et j'ai toutes mes dents</p>
        </div>
        </Layout>
    )
}

export default About;