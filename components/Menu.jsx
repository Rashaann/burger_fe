import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Menu.module.css';
import Link from 'next/link';

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
        <Link key={i} href={{pathname:`/burgers/[burger]`, query: {id: el.id}}} as={`/burgers/${el.id}`} >
          <img src={el.image} width={250} height={250} style={{borderRadius: 15}} />
        </Link>
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
