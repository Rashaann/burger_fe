import React, { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import Router from 'next/router';

function Home() {
  const [changeHeader, setChangeHeader] = useState(false);

  return (
    <div className={styles.body} onScroll={() => setChangeHeader(!changeHeader)} >
      {changeHeader ? <Header2 /> : <Header />}

      <div className={styles.container} onScroll={() => setChangeHeader(true)}>
        <h1 className={styles.title}>
          Burger, les meilleurs burgers de Paris.
        </h1>
      </div>

      <div className={styles.about}>
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
      </div>

      <div className={styles.specialOffersContainer}>
        <div className={styles.specialOffers}>
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
        </div>
        
        <div className={styles.specialOffers}>
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
