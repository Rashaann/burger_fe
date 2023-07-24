import React from 'react';
import styles from '../styles/Header.module.css';
import Router from 'next/router';
import Head from 'next/head';

function Header() {

  let items = ['Accueil', 'Menu', 'Offres', 'Contact', 'Icon'];
  let pages = ['/', '/menu', '/specialOffers', '/contact', '/cart'];
  let subHeader = items.map((el, i) => {
    return (
    <div
      key={i}
      onClick={() => Router.push(pages[i])}
      className={styles.items}
      >
        {el}
      </div>)
  });
  return (
    <>
      {/* <Head>
        <title>Burger | Les meilleurs burgers de Paris</title>
        <meta name="description" content="Les meilleurs burgers de Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
      </Head> */}
    
      <div className={styles.body}>
          <h1
            className={styles.title}
            onClick={() => Router.push('/')}
          >BURGER</h1>
          {/* <div>Accueil Menu Offres Contact Icon</div> */}
          <div className={styles.subHeader}>
            {subHeader}
          </div>
      </div>
    </>
  )
}

export default Header