import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Menu.module.css';

export default function Menu() {
  return (
    <div>
      <Header />
      <div className={styles.container}>Menu</div>
      <Footer />
    </div>
  )
}
