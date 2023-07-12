import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Cart.module.css';

function Cart() {
  return (
    <div>
      <Header />
      <div className={styles.container}>Cart</div>
      <Footer />
    </div>
  )
}

export default Cart