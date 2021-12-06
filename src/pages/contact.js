import React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/project.module.css'
import { useState } from 'react';

function Contact() {

    const [sumbit, setSumbit] = useState({ noms: "", email: "", title: "", message: "" })
    const [ok, setOk] = useState(false)
            
   const handleSubmit = () => {
       console.log('yhea yhea ...')
   }

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Contact</h2>
                <form onSubmit={() => handleSubmit()}>
                    <label> Nom & Prénom
                        <input type="text" onChange={(e) => setSumbit({ ...sumbit, noms: e.target.value })} />
                    </label>
                    <label>Email
                        <input type="email" onChange={(e) => setSumbit({ ...sumbit, email: e.target.value })} />
                    </label>
                    <label>Titre
                        <input type="text" onChange={(e) => setSumbit({ ...sumbit, title: e.target.value })} />
                    </label>
                    <label>Message
                        <input type="text" onChange={(e) => setSumbit({ ...sumbit, message: e.target.value })} />
                    </label>
                    {ok ? <div>Message envoyé.<br/> <button className="btn" onClick={() => setOk(false)}> Autre message ? </button> </div> 
                    :
                    <button className="btn" type="submit">Envoyer</button>}
                </form>
            </div>
        </Layout>
    )
}

export default Contact;