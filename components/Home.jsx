import React, { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import Router from 'next/router';
import Head from 'next/head';


function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (height) => {
    setScrollTop(height)
  };
  // useEffect(()=> {
  //   setScrollTop(document.documentElement.scrollTop);
  // },[]);


  return (
    <>
      <Head>
        <title>Burger | Les meilleurs burgers de Paris</title>
        <meta name="description" content="Les meilleurs burgers de Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        {/* <link href="https://vjs.zencdn.net/8.0.4/video-js.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/> */}
      </Head>

      <div className={styles.body}>
        <Header />
        
        <div key={1} className={styles.container}>
          <h1 className={`${styles.title} slideRight`}>
            Burger, les meilleurs burgers de Paris.
          </h1>
        </div>
        {/* <button onClick={() => handleScroll()} >CLICK ME!</button> */}
        {scrollTop >=350?
        <div onMouseOver={() => handleScroll(350)} className={`slideRight ${styles.about}`}>
          <div>
            <img src='burger6.png' width={370} style={{borderRadius: 20}} />
          </div>
          <div className={styles.aboutRightPartContainer}>
            <div className={styles.aboutHeader}>A PROPOS</div>
            <div className={styles.aboutRightPart}>
              <h2 className={styles.h2}>Title</h2>
              <p className={styles.text}>Text</p>
              <p className={styles.subText}>Subtext</p>
              <button
                className={styles.seeMoreBtn}
                onClick={() => Router.push('/about')}>VOIR PLUS</button>
            </div>
          </div>
        </div>:
        <div onMouseOver={() => handleScroll(350)} className={`slideLeft ${styles.about}`}></div>}
        {/* <button onClick={() => handleScroll()} >CLICK ME!</button> */}

        <div className={styles.specialOffersContainer}>
          {scrollTop>=680?
          <div onMouseOver={() => handleScroll(680)} className={`${styles.specialOffers} slideRight`}>
            <div>
              <img src='brgr7.jpeg' width={450} style={{borderRadius: 15}} />
            </div>

            <div className={styles.specialOffersRightPartContainer}>
              <div className={styles.specialOffersHeader}>PROMO</div>
              <div className={styles.specialOffersRightPart}>
                <h2 className={styles.h2}>TERIYAKI BURGER</h2>
                <p className={styles.text}>Bun sésame (ou sans gluten +1€), artisanal steak haché de bœuf maturé (ou beyond meat +2€), cébette, sauce teriyaki maison, chou mariné, shichimi togarashi (mélange 7 épices), mayo japonaise.</p>
                <p className={styles.price}>10,00€</p>
                <button
                  className={styles.seeMenuBtn}
                  onClick={() => Router.push('/menu')}>VOIR LE MENU</button>
              </div>
            </div>
          </div>:
          <div onMouseOver={() => handleScroll(680)} className={`slideLeft ${styles.specialOffers}`}></div>}
          
          {scrollTop >= 800?
          <div onMouseOver={() => handleScroll(800)} className={`${styles.specialOffers} slideRight`}>
            <div>
              <img src='brgr12.jpg' width={450} style={{borderRadius: 15}} />
            </div>

            <div className={styles.specialOffersRightPartContainer}>
              <div className={styles.specialOffersHeader}>PROMO</div>
              <div className={styles.specialOffersRightPart}>
                <h2 className={styles.h2}>LOU SALEYA</h2>
                <p className={styles.text}>Ce burger est un hommage culinaire au pays niçois et à sa gastronomie.</p>
                <p className={styles.price}>9,00€</p>
                <button
                  className={styles.seeMenuBtn}
                  onClick={() => Router.push('/menu')}>VOIR LE MENU</button>
              </div>
            </div>
          </div>:
          <div onMouseOver={() => handleScroll(800)} className={styles.specialOffers}></div>}
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Home;
