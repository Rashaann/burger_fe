import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.container}>About</div>
      <Footer />
    </div>
  )
}