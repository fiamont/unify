import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import React, { useState, useEffect } from 'react'
import { database } from '../firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default function Kulturlivsstil() {
    const dbInstance = collection(database, 'events');
    const q = query(dbInstance, where("category", "==", "Kultur & Livsstil"))
    const [eventsArray, setEventsArray] = useState([]);
    // let events = []
  
    // onSnapshot(q, (snapshot) => {
    //   snapshot.docs.forEach((doc) => {
    //     events.push({ ...doc.data(), id: item.id})
    //   })
    //   console.log(events)
    // })

       const getEvents = () => {
          getDocs(q)
              .then((data) => {
                  setEventsArray(data.docs.map((item) => {
                      return { ...item.data(), id: item.id}
                  }));
              })
      } 
      useEffect(() => {
          getEvents();
      }, [])
  
    return (
      <div className={styles.container}>
        <Head><title>Unify - Kultur & Livsstil</title></Head>
        <main className={styles.main}>
        <Eventbutton/>  
        <h1 className={styles.rubrik}>Kultur & Livsstil</h1>
  
        <BackToTop />
        <Event events={eventsArray}/>
        </main>
      </div>
    )
  }
  