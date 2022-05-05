import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import listOfEvents from '../db/listOfEvents.json' 

import React, { useState, useEffect } from 'react'
import { app, database } from './../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

// export async function getServerSideProps (context) {

//   const dbInstance = collection(database, 'events');
//   let eventsArray = []

//   const getEvents = () => {
//     const [eventsArray, setEventsArray] = useState([]);
   
//     getDocs(dbInstance)
//         .then((data) => {
//             setEventsArray(data.docs.map((item) => {
//                 return { ...item.data(), id: item.id }
//             }));
//         })

//         useEffect(() => {
//           getEvents();
//         }, []) 
        
        
//   }
  
//   return {
//     props :{
//       events :eventsArray
//     }
//   }
// }

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik}>I Blickfånget</h1>

      <BackToTop />
      {/* <Event events={events}/> */}
      <Event events={listOfEvents}/>
      </main>
    </div>
  )
}
