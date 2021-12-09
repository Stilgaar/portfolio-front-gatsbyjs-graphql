import React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/project.module.css'
import { useState } from 'react';
const axios = require('axios')

function Contact() {

    const [sumbit, setSumbit] = useState({ noms: "", email: "", title: "", message: "" })
    const [ok, setOk] = useState(false)

    const handleSubmit = () => {

        axios.post('http://localhost:5000/graphql', {
            query: `
        mutation NewMessage($message: String, $title: String, $email: String, $noms: String) {
           NewMessage(message: $message, title: $title, email: $email, noms: $noms) {
               noms
               email
               title
               message
               id } }`
            ,
            variables: {
                noms: sumbit.noms,
                email: sumbit.email,
                title: sumbit.title,
                message: sumbit.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => console.log("TES", res))
    }

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Contact</h2>
                <form onSubmit={() => handleSubmit()}>
                    <label htmlFor="noms"> Nom & Prénom </label>
                    <input type="text" name="noms" onChange={(e) => setSumbit({ ...sumbit, noms: e.target.value })} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setSumbit({ ...sumbit, email: e.target.value })} />

                    <label htmlFor="titre">Titre</label>
                    <input type="text" name="titre" onChange={(e) => setSumbit({ ...sumbit, title: e.target.value })} />

                    <label htmlFor="msg">Message</label>
                    <textarea col="15" row="15" type="text" name="msg" onChange={(e) => setSumbit({ ...sumbit, message: e.target.value })}>
                    </textarea>

                    {ok ? <div>Message envoyé.<br /> <button className="btn" onClick={() => setOk(false)}> Autre message ? </button> </div>
                        :
                        <button className="btn" type="submit">Envoyer</button>}
                </form>

                <h2>Coordonnées</h2>
                <p>Jean-François van Straelen <br/>
                    8 Allée des Jasmins, 06130 Grasse <br/>
                    06 63 87 77 90 <br/>    
                    jeffvanstraelen@gmail.com</p>

            </div>
        </Layout>
    )
}

export default Contact;