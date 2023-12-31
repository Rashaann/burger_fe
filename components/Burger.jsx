import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Burger.module.css';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';


import { addStripePrice, addToCart } from '../reducers/burgers';
import { useDispatch } from 'react-redux';
import handler from '../pages/api/checkout_sessions';


export default function Burger() {

  const [selectedBurger, setSelectedBurger] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const id = router.query.id;



  const dispatch = useDispatch();


  useEffect(() => {
    fetch("https://burgers-be.vercel.app/burgers/all")
    .then(response => response.json())
    .then(data => {
      if(data.result){
        data.list.map((el) => {
            console.log(router.query)
            if(JSON.stringify(el.id) === JSON.stringify(router.query.burger)){
              console.log(el);
                setSelectedBurger(el);
                setIsLoaded(true);
            }
        });
        }
    })
  },[router.query.burger]);


  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);


    const handleStripeId = () => {


        fetch('http://localhost:3001/api/checkout_sessions', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ 
                    stripeid: selectedBurger.stripeId,
                  }),
        }).then(response => response.json())
          .then(data => {
            console.log('DATAAAAA => ',data);
          });
    }

    const handleAdd2Cart = () => {
      dispatch(addToCart({selectedBurger, quantity: 1}));
      console.log('ADDED!')
    }







  return (
    <>
        <Head>
            <title>Burger | Le meilleur des menus</title>
            <meta name="description" content="Le meilleur des menus" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        </Head>


        <div className={styles.body}>
            <Header />

            {isLoaded?
            <div className={`fadeIn ${styles.container}`}>
                <p className={styles.name}>{selectedBurger.name}</p>
                <img src={selectedBurger.image} width={400} />
                <div className={styles.subContainer}>
                    <div className={styles.descriptionContainer}>
                        <h3 className={styles.title}>DESCRIPTION:</h3>
                        <p className={styles.text}>{selectedBurger.description}</p>
                    </div>
                    <div className={styles.ingredientsContainer}>
                        <h3 className={styles.title}>INGREDIENTS:</h3>
                        <p className={styles.text}>{selectedBurger.ingredients}</p>
                    </div>
                    <p className={styles.price}>{selectedBurger.price}€</p>
                </div>
                <div className={styles.btnsContainer}>
                    <button
                      className={styles.cartBtn}
                      onClick={() => handleAdd2Cart()}
                      >
                        AJOUTER AU PANIER
                    </button>
                    <form action="/api/checkout_sessions" method="POST" body="selectedBurger.stripeId" >
                        <button
                            className={styles.buyBtn}
                            type="submit"
                            role="link"
                            // onClick={() => handleStripeId()}
                        >
                            ACHETER
                        </button>
                    </form>
                </div>
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