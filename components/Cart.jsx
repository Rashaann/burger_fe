import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Head from 'next/head';

import styles from '../styles/Cart.module.css';
import { useSelector } from 'react-redux';

function Cart() {
  const [isLoaded, setIsLoaded] = useState(false);


  const cart = useSelector((state) => state.burgers.value.cart);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <>
      <Head>
        <title>Burger | Panier</title>
        <meta name="description" content="Panier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>


      <div className={styles.body}>
        <Header />

        {isLoaded?
        <div className={styles.container}>Cart</div>:
        <div className={styles.container}>
          <div className="loader3">
            <span></span>
            <span></span>
          </div>
        </div>}

        <Footer />
      </div>
    </>
  )
}

export default Cart