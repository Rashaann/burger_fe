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
    let isMouseDown = styles.image;
    return (//agrandir image onHover
      <div className={styles.burgerContainer} onMouseOver={() => isMouseDown = styles.imageHovered} onMouseLeave={() => isMouseDown =styles.image}>
        <Link key={i} href={{pathname:`/burgers/[burger]`, query: {id: el.id}}} as={`/burgers/${el.id}`} className={`slideRight ${styles.link}`}>
          <img src={el.image} className={styles.image} />
          <p className={styles.title}>{el.name}</p>
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
