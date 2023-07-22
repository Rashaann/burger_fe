import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import Router from 'next/router';
import Head from 'next/head';


function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isWindowUsable, setIsWindowUsable] = useState(false);
  const listInnerRef = useRef();

  const handleScroll = (height) => {
    setScrollTop(height);
    console.log(window.scrollY);
  };



  useEffect(()=> {
    if (typeof window !== 'undefined') {
      // 👉️ can use window here
      console.log('You are on the browser')
    
      console.log(document.body);
      setIsWindowUsable(true);
    }
  },[isWindowUsable]);
  //PB -> GET CONTINIOUSLY window.scrollY VALUE
  


  return (
    <>
      <Head>
        <title>Burger | Les meilleurs burgers de Paris</title>
        <meta name="description" content="Les meilleurs burgers de Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        {/* <link href="https://vjs.zencdn.net/8.0.4/video-js.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/> */}
      </Head>

      <div className={styles.body}>
        <Header />
        
        <div key={1} className={styles.container}>
          <div className={`zoomInOutBox ${styles.subContainer}`}>
            <h1 className={styles.title}>
              Burger, les meilleurs burgers de Paris.
            </h1>
          </div>
        </div>
        {/* <button onClick={() => handleScroll()} >CLICK ME!</button> */}
        <div class=" slider sliderR">
          <div class="slide-trackR">
            <div class="slide slideword1">
              authenticité
            </div>
            <div class="slide slideword2">
              originalité
            </div>
            <div class="slide slideword3">
              générosité
            </div>
            <div class="slide slideword1">
              variété
            </div>
            <div class="slide slideword2">
              goût
            </div>
            <div class="slide slideword3">
              savoir-faire
            </div>
            <div class="slide slideword1">
              saveurs
            </div>
            <div class="slide slideword2">
              authenticité
            </div>
            <div class="slide slideword3">
              originalité
            </div>
            <div class="slide slideword1">
              générosité
            </div>
            <div class="slide slideword2">
              variété
            </div>
            <div class="slide slideword3">
              goût
            </div>
            <div class="slide slideword1">
              savoir-faire
            </div>
            <div class="slide slideword2">
              saveurs
            </div>
          </div>
        </div>
        <div class=" sliderL slider ">
          <div class="slide-trackL">
            <div class="slide slideword3">
              saveurs
            </div>
            <div class="slide slideword2">
              savoir-faire
            </div>
            <div class="slide slideword1">
              goût
            </div>
            <div class="slide slideword3">
              variété
            </div>
            <div class="slide slideword2">
              générosité
            </div>
            <div class="slide slideword1">
              originalité
            </div>
            <div class="slide slideword3">
              authenticité
            </div>
            <div class="slide slideword2">
              saveurs
            </div>
            <div class="slide slideword1">
              savoir-faire
            </div>
            <div class="slide slideword3">
              goût
            </div>
            <div class="slide slideword2">
              variété
            </div>
            <div class="slide slideword1">
              générosité
            </div>
            <div class="slide slideword3">
              originalité
            </div>
            <div class="slide slideword2">
              authenticité
            </div>
          </div>
     
        </div>
        {isWindowUsable && window.scrollY>=350?
        <div className={`slideRight ${styles.about}`}>
          <div>
            <img src='burger6.png' width={370} style={{borderRadius: 20}} />
          </div>
          <div className={styles.aboutRightPartContainer}>
            <div className={styles.aboutHeader}>A PROPOS</div>
            <div className={styles.aboutRightPart}>
              <h2 className={styles.h2}>Burger, créateur de burgers</h2>
              <p className={styles.text}>Le produit est au coeur de la démarche Burger en proposant aux clients une large gamme.
              La carte propose bien évidemment des burgers mais aussi de nombreux autres produits.</p>
              <p className={styles.subText}>Burger se différencie avec un goût authentique, l'originalité des recettes, la variété des produits et, bien sûr, la générosité.</p>
              <button
                className={styles.seeMoreBtn}
                onClick={() => Router.push('/about')}>VOIR PLUS</button>
            </div>
          </div>
        </div>:
        <div className={`slideLeft ${styles.about}`}></div>}
        {/* <button onClick={() => handleScroll()} >CLICK ME!</button> */}

        <div className={styles.specialOffersContainer}>
          {isWindowUsable && window.scrollY>=680?
          <div className={`${styles.specialOffers} slideRight`}>
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
          <div className={`slideLeft ${styles.specialOffers}`}></div>}
          
          {isWindowUsable && window.scrollY >= 850?
          <div className={`${styles.specialOffers} slideRight`}>
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
          <div className={styles.specialOffers}></div>}

        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
