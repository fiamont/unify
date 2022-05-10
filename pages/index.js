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
  const dbInstance = collection(database, 'events');
    const [eventsArray, setEventsArray] = useState([]);

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


  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik}>I Blickfånget</h1>

      <BackToTop />
      <Event events={eventsArray}/>
      {/* <pre>Hello event list {JSON.stringify(list, null, 7)}</pre> */}
      {/* <Event events={JSON.stringify(list, null, 7)}/> */}
      </main>
    </div>
  )
}


  // Home.getInitialProps = async () => {
  //   const resp = await fetch('http://localhost:3000/api/events'); 
  //   const json = await resp.json();
  //   return {list: json};
  // }

  //byta ut till https://unify-sti.vercel.app/api/events ???
  // ev byta till Home.getServerSideProps... ??