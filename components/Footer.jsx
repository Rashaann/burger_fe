import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
          <h3>LOGO</h3>
          <div className={styles.subContainer}>
            <p>Text</p>
            <p>ICONS</p>
          </div>
        </div>

        <div className={styles.container}>
          <h3>Contacts</h3>
          <div className={styles.subContainer}>
            <p>Position</p>
            <p>Phone number</p>
            <p>Email address 1</p>
            <p>Email address 2</p>
          </div>
        </div>

        <div className={styles.container}>
          <h3>Newsletter</h3>
          <div className={styles.subContainer}>
            <p>Enter your email</p>
            <p>SUBSCRIBE</p>
          </div>
        </div>
    </div>
  )
}

export default Footer