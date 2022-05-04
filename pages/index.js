import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton' 
import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';

const dbInstance = collection(database, 'events');

const [eventsArray, setEventsArray] = useState('');

const getEvents = () => {
  getDocs(dbInstance)
      .then((data) => {
          setEventsArray(data.docs.map((item) => {
              return { ...item.data(), id: item.id }
          }));
      })
}

useEffect(() => {
  getEvents();
}, [])


export default function Home() {

  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik}>I Blickfånget</h1>
      <BackToTop />
      <Event events={eventsArray}/>
      </main>
    </div>
  )
}
