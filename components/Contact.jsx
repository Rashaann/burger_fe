import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GoogleMapComponent from './GoogleMapComponent';

import styles from '../styles/Contact.module.css';

import Head from 'next/head';

import AOS from 'aos';
import "aos/dist/aos.css";


import { GiPositionMarker } from 'react-icons/gi';
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';



export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [request, setRequest] = useState('');



  useEffect(()=> {
    setIsLoaded(true);
    AOS.init();
    AOS.refresh();
  },[]);


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <Head>
        <title>Burger | Les meilleurs burgers de Paris</title>
        <meta name="description" content="Les meilleurs burgers de Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>


      <div className={styles.body}>
        <Header />

        {isLoaded?
        <div className={styles.container}>
          <div className={styles.formContainer} data-aos="fade-right">
            <div>
              <h2 className={styles.formTitle}>En cas d'interrogations, contactez-nous via le formulaire ci-dessous:</h2>
              <p className={styles.formText}>Tous les champs doivent obligatoirement être remplis. Dans le cas contraire, nous ne serons pas en mesure de vous répondre.</p>
            </div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <label className={styles.label}>
                <h3 className={styles.formSubTitle}>Adresse mail:</h3>
                <input className={styles.inputs} type="text" name='email' placeholder='Adresse mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
              </label>
              <label className={styles.label}>
                <h3 className={styles.formSubTitle}>Objet:</h3>
                <input className={styles.inputs} type="text" name='object' placeholder='Objet' onChange={(e) => setObject(e.target.value)} value={object}/>
              </label>
              <label className={styles.label}>
                <h3 className={styles.formSubTitle}>Mail:</h3>
                <textarea className={styles.mail} placeholder='Votre message' name='request' onChange={(e) => setRequest(e.target.value)} value={request}></textarea>
              </label>
              <button className={styles.submitBtn} type="submit">Envoyer</button>  
            </form>
          </div>
          <div className={styles.infosContainer} data-aos="fade-left">
            <div>
              <h2 className={styles.infosTitle}>Autre solution:</h2>
              <p className={styles.infosText}>Dans le cas où vous voudriez nous contacter autrement que via un formulaire, nous avons mis à votre disposition plusieurs voies de communications!</p>
            </div>
            <div className={styles.infosContent}>
              <div className={styles.infosLeftPart}>
                <h3 className={styles.infosSubTitle}>Venez directement nous voir!</h3>
                <p className={styles.infosText}>Nous sommes situés en plein coeur de Paris:</p>
                <div className={styles.leftSubContainer}>
                  <GoogleMapComponent />
                </div>
              </div>
              <div className={styles.infosRightPart}>
                <h3 className={styles.infosSubTitle}>Un numéro de téléphone et deux adresses mail rien que pour vous:</h3>
                <div className={styles.rightSubContainer}>
                  <p className={styles.infosRightText}><BsFillPhoneFill size={25} color='rgb(245, 130, 49)' />    <a href="tel:+33612345678" style={{textDecoration: 'none', color: 'rgb(245, 130, 49'}}>+33612345678</a></p>
                  <p className={styles.infosRightText}><AiOutlineMail size={25} color='rgb(245, 130, 49)' />    <a href="mailto:email1@burger.com" style={{textDecoration: 'none', color: 'rgb(245, 130, 49'}}>email1@burger.com</a></p>
                  <p className={styles.infosRightText}><AiOutlineMail size={25} color='rgb(245, 130, 49)' />    <a href="mailto:email1@burger.com" style={{textDecoration: 'none', color: 'rgb(245, 130, 49'}}>email2@burger.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>:
        <div className={styles.container}>
          <div className="loader3">
            <span></span>
            <span></span>
          </div>
        </div>}

        <Footer />
      </div>
    </>
  )
}