import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Burger.module.css';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Burger() {

  const [selectedBurger, setSelectedBurger] = useState([]);
  const router = useRouter();
  const id = router.query.id;


  useEffect(() => {
    fetch("https://burgers-be.vercel.app/burgers/all")
    .then(response => response.json())
    .then(data => {
      if(data.result){
        data.list.map((el) => {
            console.log(router.query)
            if(JSON.stringify(el.id) === JSON.stringify(router.query.burger)){
                setSelectedBurger(el);
            }
        });
        }
    })
  },[router.query.burger]);




  return (
    <>
        <Head>
            <title>Burger | Le meilleur des menus</title>
            <meta name="description" content="Le meilleur des menus" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
            {/* <link href="https://vjs.zencdn.net/8.0.4/video-js.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/> */}
        </Head>


        <div className={styles.body}>
            <Header />

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
                    <button className={styles.cartBtn}>AJOUTER AU PANIER</button>
                    <button className={styles.buyBtn}>ACHETER</button>
                </div>
            </div>

            <Footer />
        </div>
    </>
  )
}