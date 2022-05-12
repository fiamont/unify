import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'

import React from 'react'
import { db } from '../utils/firebase'

export default function Category({ events }) {

  return (
    <div className={styles.container}>
      <Head><title>{events.category}</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik}></h1>

      <BackToTop />
    <Event events={events} eventsKey={events.id}/> 
      </main>
    </div> 
  )
}

//Server side code
export async function getServerSideProps(context) {
    const { category } = context.params
  
    const doc = await db.collection('events').doc(category).get()
  
    const events = { id: doc.id, ...doc.data() }
  
    return {
      props: {
        events: JSON.parse(JSON.stringify(events)),
      },
    }
  }