import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import React, { useState, useEffect } from 'react'
import { database } from '../firebaseConfig'
import { collection, getDocs, query, where, and } from 'firebase/firestore'

export default function Konsertquizuteliv() {
    const dbInstance = collection(database, 'events');
    const q = query(dbInstance, where("category", "==", "Quiz"))
      const [eventsArray, setEventsArray] = useState([]);
  
       const getEvents = () => {
          getDocs(q)
              .then((data) => {
                  setEventsArray(data.docs.map((item) => {
                      return { ...item.data(), id: item.id }
                  }));
              })
      } 
      useEffect(() => {
          getEvents();
      }, [])
  
  
    return (
      <div className={styles.container}>
        <Head><title>Unify - Konsert, Quiz & Uteliv</title></Head>
        <main className={styles.main}>
        <Eventbutton/>  
        <h1 className={styles.rubrik}>Konsert, Quiz & Uteliv</h1>
  
        <BackToTop />
        <Event events={eventsArray}/>
        </main>
      </div>
    )
  }
  