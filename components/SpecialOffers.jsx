import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/SpecialOffers.module.css';

export default function SpecialOffers() {
  return (
    <div>
      <Header />
      <div className={styles.container}>SpecialOffers</div>
      <Footer />
    </div>
  )
}
