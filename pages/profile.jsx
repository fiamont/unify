import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Trending from '../components/TrendingEvents'
import React from 'react'
import { db } from '../utils/firebase'
import BackToHomepage from '../components/BackToHomepage'

export default function Profile({ allposts }) {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.mainHome}>
        <div className={styles.back}>
          <BackToHomepage/>
        </div>
      <div className={styles.imgDiv}>
            <div className={styles.profileImg}></div>
            <p className={styles.profilename}>Profilnamn</p>
        </div>
      <p className={styles.rubrikProfile}>Mina Event</p>
      <Trending events={allposts}/>
      <p className={styles.rubrikProfile}>Anmälda event</p>
      <Trending events={allposts}/>
      </main>
    </div> 
     
      )
    }

//Server side code
export async function getServerSideProps(){
	const snapshot = await db
  .collection('posts')
  .get()

  const allposts = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })

  return {
    props: {
      allposts: JSON.parse(JSON.stringify(allposts))
    },
  }
}