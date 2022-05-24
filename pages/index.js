import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BackToTop from '../components/BackToTopButton'
import TrendingEvents from '../components/TrendingEvents'
import Categories from '../components/Categories'
import TopOfHomepage from '../components/TopOfHomepage'
import EventButton from '../components/Eventbutton'

import React from 'react'
import { db } from '../utils/firebase'

export default function Home({ allposts, trendingposts }) {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.mainHome}>
      <EventButton/>
      <TopOfHomepage events={allposts}/>
      <BackToTop />
      
      <p className={styles.insidetitle}>POPULÄRT</p>
      <TrendingEvents events={trendingposts}/>
      <div className={styles.categoryContainer}>
      <Categories/>
      </div>
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
        .where("date", ">=", today)
        .get()

  const allposts = snapshot.docs.map((doc) => {
    return {
      id: doc.id
    }
  })
  
  

  const snapshot2 = await db
  .collection('posts')
  .orderBy('date', 'desc')
  .limit(6)
  .get()

  const trendingposts = snapshot2.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
    
  })

  return {
    props: {
      allposts: JSON.parse(JSON.stringify(allposts)),
      trendingposts: JSON.parse(JSON.stringify(trendingposts))
    },
  }
}