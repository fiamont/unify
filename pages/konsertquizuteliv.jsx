import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import Image from 'next/image'

import React from 'react'
import { db } from '../utils/firebase'

export default function Nojeuteliv({ events }) {

  return (
    <div className={styles.container}>
      <Head><title>Unify - Nöje & Uteliv</title></Head>
      <main className={styles.main}>
        <div className={styles.titleDiv}>
          <h1 className={styles.rubrik2}>Nöje & Uteliv</h1>
          <Image className={styles.cross} src="/nojeutelivIcon.png" alt='nojeutelivIcon' width={30} height={30}/>
        </div> 
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