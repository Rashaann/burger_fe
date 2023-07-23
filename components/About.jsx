import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/About.module.css';

import Head from 'next/head';

import AOS from 'aos';
import "aos/dist/aos.css";

export default function About() {
  useEffect(()=> {
    AOS.init();
    AOS.refresh();
  },[]);
  return (
    <>
      <Head>
        <title>Burger | Les meilleurs burgers de Paris</title>
        <meta name="description" content="Les meilleurs burgers de Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <div>
        <Header />

        <div className={styles.container}>
          
          <h1 className={styles.title}>A PROPOS</h1>

          <div className={styles.aboutSubContainer}>
            <div data-aos="fade" data-aos-duration="2000" >
              <h2 className={styles.subTitle}>Burger, créateur de burgers</h2>
              <p className={styles.text}>
                Le produit est au coeur de la démarche Burger en proposant aux clients une large gamme.
                La carte propose bien évidemment des burgers mais aussi de nombreux autres produits.</p>
              <p className={styles.text}>Burger se différencie avec un goût authentique, l'originalité des recettes, la variété des produits et, bien sûr, la générosité.</p>
            </div>
          </div>

          <div className={styles.bunsContainer}>
            <div data-aos="fade-zoom-in" data-aos-duration="2000" className={styles.bunsSubContainer}>
              <h2 className={styles.subTitle}>Nos buns</h2>
              <p className={styles.text}>Nos boulangers sont sélectionnés avec choix dans chacune de nos villes d'implantation.
                Ils appliquent au gramme de farine près, les recettes de Burger qui ont demandé plusieurs mois d'élaboration.
              </p>
              <p className={styles.text}>
                Boulés à la force du poignet, il en ressort des buns moelleux et briochés avec une croûte dorée, parsemées de graines de sésame.
              </p>
              <p className={styles.text}>
                Les buns sortent tous du même moule pour obtenir l'équilibre parfait entre le pain, la viande et les autres ingrédients.
              </p>
            </div>
          </div>

          <div className={styles.aboutSubContainer}>
            <div data-aos="fade" data-aos-duration="2000">
              <h2 className={styles.subTitle}>Un choix de viande strict</h2>
              <p className={styles.text}>Une viande de choix, 100% française, sélectionnée dans la pure tradition familiale auprès d'éleveurs engagés aux chartes de bonnes pratiques d'élevage (CBPE), soucieux du bien-être animal.</p>
              <p className={styles.text}>Les boeufs sont élevés avec une méthode ancestrale d'engraissement de bovins à l'herbe qui permet d'acquérir une viande de qualité.</p>
              <p className={styles.text}>Chaque matin, les steaks sont hachés sur place. La viande est tirée d'un mélange des meilleurs morceaux puis les steaks sont cuits sur-mesure sur une plancha.</p>
            </div>
          </div>

          <div className={styles.friesContainer}>
            <div data-aos="fade-zoom-in" data-aos-duration="2000" className={styles.friesSubContainer}>
              <h2 className={styles.subTitle}>Nos frites</h2>
              <p className={styles.text}>Si nos frites maison sont aussi belles et croustillantes, ce n'est pas dû au hasard!</p>
              <p className={styles.text}>Epluchées et coupées chaque matin, elles sont cuites en deux bains à la Belge.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}