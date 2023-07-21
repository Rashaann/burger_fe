import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>A PROPOS</h1>
        <div>
          <h2>Burger, créateur de burgers</h2>
          <p>
            Le produit est au coeur de la démarche Burger en proposant aux clients une large gamme.
            La carte propose bien évidemment des burgers mais aussi de nombreux autres produits.</p>
          <p>Burger se différencie avec un goût authentique, l'originalité des recettes, la variété des produits et, bien sûr, la générosité.</p>
        </div>
        <div>
          <h2>Nos buns</h2>
          <p>Nos boulangers sont sélectionnés avec choix dans chacune de nos villes d'implantation.
            Ils appliquent au gramme de farine près, les recettes de Burger qui ont demandé plusieurs mois d'élaboration.
          </p>
          <p>
            Boulés à la force du poignet, il en ressort des buns moelleux et briochés avec une croûte dorée, parsemées de graines de sésame.
          </p>
          <p>
            Les buns sortent tous du même moule pour obtenir l'équilibre parfait entre le pain, la viande et les autres ingrédients.
          </p>
        </div>
        <div>
          <h2>Un choix de viande strict</h2>
          <p>Une viande de choix, 100% française, sélectionnée dans la pure tradition familiale auprès d'éleveurs engagés aux chartes de bonnes pratiques d'élevage (CBPE), soucieux du bien-être animal.</p>
          <p>Les boeufs sont élevés avec une méthode ancestrale d'engraissement de bovins à l'herbe qui permet d'acquérir une viande de qualité.</p>
          <p>Chaque matin, les steaks sont hachés sur place. La viande est tirée d'un mélange des meilleurs morceaux puis les steaks sont cuits sur-mesure sur une plancha.</p>
        </div>
        <div>
          <h2>Nos frites</h2>
          <p>Si nos frites maison sont aussi belles et croustillantes, ce n'est pas dû au hasard!</p>
          <p>Epluchées et coupées chaque matin, elles sont cuites en deux bains à la Belge.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}