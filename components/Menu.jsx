import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Menu.module.css';

export default function Menu() {
  const [burgersList, setBurgersList] = useState([]);


  useEffect(() => {
    fetch("http://192.168.0.35:3000/burgers/all")
    .then(response => response.json())
    .then(data => {
      if(data.result){
        setBurgersList(data.list);
      }
    })
  },[]);


  const dispItems = burgersList.map((el, i) => {
    return (
      <div className={styles.burgerContainer}>
        <img src={el.image} width={250} height={250} style={{borderRadius: 15}} />
      </div>
    )
  })
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>{dispItems}</div>
      <Footer />
    </div>
  )
}
