import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';


import { GiPositionMarker } from 'react-icons/gi';
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';

import useMediaQuery from '@mui/material/useMediaQuery';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Link from 'next/link';

function Footer() {
  const matches = useMediaQuery('(min-width:900px)');

  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.body}>
      {matches?
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h3 className={styles.logo}>BURGER</h3>
          <p style={{cursor: 'auto'}}>Les meilleurs burgers de Paris</p>
          <div className={styles.subContainer2}>
            <p className={styles.text}><AiFillFacebook size={25} color='rgb(245, 130, 49)' /> facebook</p>
            <p className={styles.text}><AiOutlineTwitter size={30} color='rgb(245, 130, 49)' /> twitter</p>
            <p className={styles.text}><FaSnapchatGhost size={25} color='rgb(245, 130, 49)' /> snapchat</p>
            <p className={styles.text}><AiFillInstagram size={25} color='rgb(245, 130, 49)' /> instagram</p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h3 className={styles.title}>Contacts</h3>
          <p style={{cursor: 'auto'}}>Envie de nous poser vos questions? Contactez-nous!</p>
          <div className={styles.subContainer2}>
            <p className={styles.text}><GiPositionMarker size={25} color='rgb(245, 130, 49)' />Position</p>
            <p className={styles.text}><BsFillPhoneFill size={25} color='rgb(245, 130, 49)' />0612345678</p>
            <p className={styles.text}><AiOutlineMail size={25} color='rgb(245, 130, 49)' />email1@burger.com</p>
            <p className={styles.text}><AiOutlineMail size={25} color='rgb(245, 130, 49)' />email2@burger.com</p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <h3 className={styles.title}>Newsletter</h3>
          <div className={styles.subContainer2}>
            {/* <input placeholder="Enter your email" className={styles.input2} /> */}
            <div className={styles.form}>
              <input type="text" name="text" autoComplete="off" required />
              <label htmlFor="text" className={styles.labelName}>
                <span className={styles.contentName}>
                  Adresse email
                </span>
              </label>
            <div className={styles.btnContainer}>
              <button className={styles.subscribeBtn}>S'INSCRIRE</button>
            </div>
            </div>
          </div>
        </div>
      </div>:
      <div className={styles.container}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={styles.subContainer}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color='error' />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={styles.logo}>
                BURGER
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.text}><AiFillFacebook size={25} color='rgb(245, 130, 49)' /> facebook</p>
              <p className={styles.text}><AiOutlineTwitter size={30} color='rgb(245, 130, 49)' /> twitter</p>
              <p className={styles.text}><FaSnapchatGhost size={25} color='rgb(245, 130, 49)' /> snapchat</p>
              <p className={styles.text}><AiFillInstagram size={25} color='rgb(245, 130, 49)' /> instagram</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={styles.subContainer}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color='error' />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={styles.title}>
                Contacts
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.text}><GiPositionMarker size={25} color='rgb(245, 130, 49)' />Position</p>
              <p className={styles.text}><BsFillPhoneFill size={25} color='rgb(245, 130, 49)' />0612345678</p>
              <p className={styles.text}><AiOutlineMail size={25} color='rgb(245, 130, 49)' />email1@burger.com</p>
              <p className={styles.text}><AiOutlineMail size={25} color='rgb(245, 130, 49)' />email2@burger.com</p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={styles.subContainer}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color='error' />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={styles.title}>
                Newsletter
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.form}>
                <input type="text" name="text" autoComplete="off" required />
                <label htmlFor="text" className={styles.labelName}>
                  <span className={styles.contentName}>
                    Adresse email
                  </span>
                </label>
                <div className={styles.btnContainer}>
                  <button className={styles.subscribeBtn}>S'INSCRIRE</button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
      </div>}

      <div className={styles.signature}>Made with 🧡 by Zak<span style={{color: 'white'}}>stein</span></div>
    </div>
  )
}

export default Footer