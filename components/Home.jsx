import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import Router from 'next/router';
import Head from 'next/head';


import AOS from 'aos';
import "aos/dist/aos.css";


function Home() {

  

  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(()=> {
    setIsLoaded(true);
    AOS.init();
    AOS.refresh();
  },[]);
  


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
        
        <div key={1} className={styles.container}>
          <div className={`zoomInOutBox ${styles.subContainer}`}>
            <h1 className={styles.title}>
              Burger, les meilleurs burgers de Paris.
            </h1>
          </div>
        </div>


        <div className={styles.about} data-aos="fade" data-aos-duration="2000">
          <div>
            <img src='burger6.png' className={styles.aboutImage} />
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
        </div>


        <div className="slider sliderR">
          <div className="slide-trackR">
            <div className="slide slideword1">
              authenticité
            </div>
            <div className="slide slideword2">
              originalité
            </div>
            <div className="slide slideword3">
              générosité
            </div>
            <div className="slide slideword1">
              variété
            </div>
            <div className="slide slideword2">
              goût
            </div>
            <div className="slide slideword3">
              savoir-faire
            </div>
            <div className="slide slideword1">
              saveurs
            </div>
            <div className="slide slideword2">
              authenticité
            </div>
            <div className="slide slideword3">
              originalité
            </div>
            <div className="slide slideword1">
              générosité
            </div>
            <div className="slide slideword2">
              variété
            </div>
            <div className="slide slideword3">
              goût
            </div>
            <div className="slide slideword1">
              savoir-faire
            </div>
            <div className="slide slideword2">
              saveurs
            </div>
          </div>
        </div>
        <div className=" sliderL slider ">
          <div className="slide-trackL">
            <div className="slide slideword3">
              saveurs
            </div>
            <div className="slide slideword2">
              savoir-faire
            </div>
            <div className="slide slideword1">
              goût
            </div>
            <div className="slide slideword3">
              variété
            </div>
            <div className="slide slideword2">
              générosité
            </div>
            <div className="slide slideword1">
              originalité
            </div>
            <div className="slide slideword3">
              authenticité
            </div>
            <div className="slide slideword2">
              saveurs
            </div>
            <div className="slide slideword1">
              savoir-faire
            </div>
            <div className="slide slideword3">
              goût
            </div>
            <div className="slide slideword2">
              variété
            </div>
            <div className="slide slideword1">
              générosité
            </div>
            <div className="slide slideword3">
              originalité
            </div>
            <div className="slide slideword2">
              authenticité
            </div>
          </div>
        </div>


        <div className={styles.menu}>
          <div className={styles.menuContent} data-aos="fade-zoom-in" data-aos-delay="300">
            <div>
              <h2 className={styles.h2}>Une petite (ou grande) faim?</h2>
              <p className={styles.textMenu}>Au menu, un panel de burgers savoureux et autres spécialités américaines pour toutes les envies avec options végétariennes et vegan. Des plats à partager en famille ou entre amis dans une ambiance chaleureuse. Côté expérience, la cuisine ouverte et le show cooking réservent des moments de partage inoubliables.  </p>
            </div>
            <button
              className={styles.seeMenuBtn}
              onClick={() => Router.push('/menu')}>VOIR LE MENU</button>
          </div>
        </div>


        <div className={styles.specialOffersContainer}>
          <div className={styles.specialOffers} data-aos="fade-right">
            <div>
              <img src='brgr7.jpeg' className={styles.specialOffersImage} />
            </div>

            <div className={styles.specialOffersRightPartContainer}>
              <div className={styles.specialOffersHeader}>PROMO</div>
              <div className={styles.specialOffersRightPart}>
                <h2 className={styles.h2}>TERIYAKI BURGER</h2>
                <p className={styles.text}>Bun sésame (ou sans gluten +1€), artisanal steak haché de bœuf maturé (ou beyond meat +2€), cébette, sauce teriyaki maison, chou mariné, shichimi togarashi (mélange 7 épices), mayo japonaise.</p>
                <p className={styles.price}>10,00€</p>
                <button
                  className={styles.seeMoreBtn}
                  onClick={() => Router.push('/specialOffers')}>PLUS D'OFFRES</button>
              </div>
            </div>
          </div>
          
          <div className={styles.specialOffers} data-aos="fade-right">
            <div>
              <img src='brgr12.jpg' className={styles.specialOffersImage}/>
            </div>

            <div className={styles.specialOffersRightPartContainer}>
              <div className={styles.specialOffersHeader}>PROMO</div>
              <div className={styles.specialOffersRightPart}>
                <h2 className={styles.h2}>LOU SALEYA</h2>
                <p className={styles.text}>Ce burger est un hommage culinaire au pays niçois et à sa gastronomie.</p>
                <p className={styles.price}>9,00€</p>
                <button
                  className={styles.seeMoreBtn}
                  onClick={() => Router.push('/specialOffers')}>PLUS D'OFFRES</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  
    </>
  );
}

export default Home;
