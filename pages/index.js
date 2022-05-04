import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import listOfEvents from '../db/listOfEvents.json' 

export default function Home() {

  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.main}>
      <Eventbutton/>  
      <h1 className={styles.rubrik}>I Blickfånget</h1>
      <BackToTop />
      <Event events={listOfEvents}/>
      </main>
    </div>
  )
}
