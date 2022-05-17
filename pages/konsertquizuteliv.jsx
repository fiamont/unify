import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'

import React from 'react'
import { db } from '../utils/firebase'

export default function Konsertquizuteliv({ events }) {

  return (
    <div className={styles.container}>
      <Head><title>Unify - Konsert, Quiz & Uteliv</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik2}>Konsert, Quiz & Uteliv</h1>
      <BackToTop />
      <Event events={events} eventsKey={events.id}/> 
      </main>
    </div> 
  )
}

//Server side code
export async function getServerSideProps(){
	const snapshots = await db
    .collection('posts')
    .where("category", "==", "Konsert, Quiz & Uteliv")
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