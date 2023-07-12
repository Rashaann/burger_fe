import React from 'react';
import styles from '../styles/Header.module.css';
import Router from 'next/router';

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
  )
}

export default Header