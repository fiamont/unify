import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'

import React from 'react'
import { db } from '../utils/firebase'

export default function HanderIdag({ posts }) {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify - Händer idag</title></Head>
      <Eventbutton/> 
      <main className={styles.main}>
      <h1 className={styles.rubrik}>Händer idag</h1>
      <BackToTop />
      <Event events={posts}/> 
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
  

	const snapshot = await db
        .collection('posts')
        .where("date", "==", today)
        .get()

  const posts = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    },
  }
}