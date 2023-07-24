import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Head from 'next/head';

import styles from '../styles/Cart.module.css';
import AOS from 'aos';
import "aos/dist/aos.css";


import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../reducers/burgers';



function Cart() {
  const [isLoaded, setIsLoaded] = useState(false);


  const cart = useSelector((state) => state.burgers.value.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(true);
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);





  const handleClearCart = () => {
    dispatch(clearCart());
  }

  let totalPrice = [];

  let displayCart = cart.map((el, i) => {
    let total = el.quantity*Number(el.selectedBurger.price);
    totalPrice.push(total);

    return (
      <div key={i} className={styles.burgerContainer} data-aos="fade" data-aos-duration="1000" >
        <div className={styles.imageContainer}>
          <img src={el.selectedBurger.image} width={200} height={200} />
        </div>
        <div className={styles.infosContainer}>
          <div className={styles.name}>{el.selectedBurger.name}</div>
          <div className={styles.price}>{el.selectedBurger.price}€</div>
          <div>Quantité: {el.quantity}</div>
        </div>
        <div>
          <p className={styles.burgerText}>Total:</p>
          <p className={styles.totalPrice}>{total}€</p>
        </div>
      </div>
    )
  })


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
        <div className={styles.container} >
          <h2>Votre panier</h2>
          {cart.length === 0?
          <div>Pas d'aricles dans le panier!</div>:
          <div className={styles.subContainer}>
            <div className={styles.content}>{displayCart}</div>
            <p className={styles.text}  data-aos="fade-left">Total: {totalPrice.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            ).toFixed(2)} euros</p>
            <div className={styles.btnContainer}>
              <button
                className={styles.clearCartBtn}
                onClick={() => handleClearCart()}
                data-aos="fade-right"
              >
                VIDER LE PANIER
              </button>
              <form action="/api/checkout_sessions" method="POST" body="selectedBurger.stripeId" >
                <button
                    className={styles.buyBtn}
                    type="submit"
                    role="link"
                    data-aos="fade-right"
                    // onClick={() => handleStripeId()}
                >
                    PAYER
                </button>
            </form>
            </div>
          </div>}
        </div>:
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