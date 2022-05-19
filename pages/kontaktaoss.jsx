import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import ContactUs from '../components/ContactUs'


export default function KontaktaOss() {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify - Kontakta Oss</title></Head>
      <main className={styles.main}>
          <ContactUs/>
      </main>
    </div> 
     
      )
    }