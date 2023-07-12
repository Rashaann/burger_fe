import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className={styles.container}>Contact</div>
      <Footer />
    </div>
  )
}
