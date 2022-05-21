import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import Image from 'next/image'
import React from 'react'
import { db } from '../utils/firebase'

export default function AllaKategorier({ posts }) {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify - Alla kategorier</title></Head>
      <main className={styles.main}>
        <div className={styles.titleDiv}>
          <h1 className={styles.rubrik2}>Alla kategorier</h1>
          <Image className={styles.cross} src="/allakategorierIcon.png" alt='allakategorierIcon' width={30} height={30}/>
        </div> 
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
        .orderBy('date')
        .startAt(today)
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