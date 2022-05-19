import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import ContactUs from '../components/ContactUs'
import BackToHomepage from '../components/BackToHomepage'


export default function KontaktaOss() {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify - Kontakta Oss</title></Head>
      <main className={styles.main}>
      <div className={styles.back}>
          <BackToHomepage/>
        </div>
          <ContactUs/>
      </main>
    </div> 
     
      )
    }