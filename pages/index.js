import styles from '../styles/Home.module.css'
// import Eventbutton from '../components/Eventbutton'
import React, { useState, useEffect } from 'react'
import { app, database } from './../firebaseConfig'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import HanderIdagButton from '../components/HanderIdagButton'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import KommandeEvent from '../components/KommandeEvent'

export default function Home() {
  const dbInstance = collection(database, 'events');
  const q = query(dbInstance, limit(1))
  const [eventsArray, setEventsArray] = useState([]);
  const [oneEvent, setOneEvent] = useState([]);

    const getEvents = () => {
        getDocs(dbInstance)
            .then((data) => {
                setEventsArray(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    } 

    const getOneEvent = () => {
      getDocs(q)
          .then((data) => {
              setOneEvent(data.docs.map((item) => {
                  return { ...item.data(), id: item.id }
              }));
          })
  } 

    useEffect(() => {
        getEvents();
        getOneEvent();
    }, [])

  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.main}>
      {/* <Eventbutton/> */}
      <div className={styles.topPart}>
        <h1 className={styles.nummer}>{eventsArray.length}</h1>
        <h1 className={styles.title}>Aktiviteter på gång<br></br>just nu</h1>
        <HanderIdagButton/>
      </div>  
      <Trending events={eventsArray}/>
      <Categories/>
      <KommandeEvent>
        <Event events={oneEvent}/>
      </KommandeEvent>
      <BackToTop>

      </BackToTop>
      
      </main>
    </div>
  )
}
