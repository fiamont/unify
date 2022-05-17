import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'

import React from 'react'
import { db } from '../utils/firebase'

export default function KonstHantverk({ events }) {

  return (
    <div className={styles.container}>
      <Head><title>Unify - Konst & Hantverk</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik2}>Konst & Hantverk</h1>
      <BackToTop />
      <Event events={events} eventsKey={events.id}/> 
      </main>
    </div> 
  )
}

//Server side code
export async function getServerSideProps(){
	const snapshots = await db
    .collection('events')
    .where("category", "==", "Konst & Hantverk")
    .get()
  
	const events = snapshots.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		}
	})

	return {
		props: {
      events: JSON.parse(JSON.stringify(events)),
		},
	}
}