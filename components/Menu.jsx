import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  const [burgersList, setBurgersList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("https://burgers-be.vercel.app/burgers/all")
    .then(response => response.json())
    .then(data => {
      if(data.result){
        setBurgersList(data.list);
        setIsLoaded(true);
      }
    })
  },[]);




  const dispItems = burgersList.map((el, i) => {
    let isMouseDown = styles.image;
    return (//agrandir image onHover
      <div key={i} className={styles.burgerContainer} onMouseOver={() => isMouseDown = styles.imageHovered} onMouseLeave={() => isMouseDown =styles.image}>
        <Link href={{pathname:`/burgers/[burger]`, query: {id: el.id}}} as={`/burgers/${el.id}`} className={`slideRight ${styles.link}`}>
          <img src={el.image} className={styles.image} />
          <p className={styles.title}>{el.name}</p>
        </Link>
      </div>
    )
  })
  return (
    <div className={styles.body}>
      <Header />
        {isLoaded?
        <div className={styles.container}>{dispItems}</div>:
        <div className={styles.container}>
          <div class="loader3">
            <span></span>
            <span></span>
          </div>
        </div>}
      <Footer />
    </div>
  )
}
