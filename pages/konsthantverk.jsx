import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import Image from 'next/image'

import React from 'react'
import { db } from '../utils/firebase'

export default function KonstHantverk({ events }) {

  return (
    <div className={styles.container}>
      <Head><title>Unify - Hantverk & Konst</title></Head>
      <main className={styles.main}>
        <div className={styles.titleDiv}>
          <h1 className={styles.rubrik2}>Hantverk & Konst</h1>
          <Image className={styles.cross} src="/hantverkkonstIcon.png" alt='hantverkkonstIcon' width={30} height={30}/>
        </div> 
        <BackToTop />
        <Event events={events} eventsKey={events.id}/> 
      </main>
    </div> 
  )
}

//Server side code
export async function getServerSideProps(){
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth()+1;
  let today = '';
  if(currentMonth<10){
    today = currentDate.getFullYear() + '-0' + currentMonth + '-' + (currentDate.getDate());
  }else{
    today = currentDate.getFullYear() + '-' + currentMonth + '-' + (currentDate.getDate());
  }

	const snapshots = await db
    .collection('posts')
    .where("category", "==", "Konst & Hantverk")
    .orderBy('date')
    .startAt(today)
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