import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import Head from 'next/head';

import AOS from 'aos';
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[]);




  const dispItems = burgersList.map((el, i) => {
    let isMouseDown = styles.image;
    return (//agrandir image onHover
      <div key={i} data-aos="fade-right" className={styles.burgerContainer} onMouseOver={() => isMouseDown = styles.imageHovered} onMouseLeave={() => isMouseDown =styles.image}>
        <Link href={{pathname:`/burgers/[burger]`, query: {id: el.id}}} as={`/burgers/${el.id}`} className={styles.link}>
          <img src={el.image} className={styles.image} />
          <p className={styles.title}>{el.name}</p>
        </Link>
      </div>
    )
  })
  return (
    <>
      <Head>
        <title>Burger | Les meilleurs burgers de Paris</title>
        <meta name="description" content="Les meilleurs burgers de Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dldeqai4u/image/upload/v1689252448/burger/burger_logo_ylhaaq.png" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>


      <div className={styles.body}>
        <Header />

        {isLoaded?
        <div className={styles.container}>{dispItems}</div>:
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
