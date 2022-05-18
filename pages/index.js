import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import HanderIdagButton from '../components/HanderIdagButton'
import TrendingEvents from '../components/TrendingEvents'
import Categories from '../components/Categories'

import React from 'react'
import { db } from '../utils/firebase'

export default function Home({ allposts, trendingposts, post }) {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify</title></Head>
      <main className={styles.main}>
      <div className={styles.topPart}>
        <h1 className={styles.nummer}>{allposts.length}</h1>
        <h1 className={styles.title}>Aktiviteter på gång<br></br>just nu</h1>
        <HanderIdagButton/>
      </div> 
      <BackToTop />
      <TrendingEvents events={trendingposts}/>
      <Categories/>
      <p className={styles.insidetitle}>Kommande evenemang</p>
      <Event events={post}/>
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
      id: doc.id
    }
  })

  const snapshot2 = await db
  .collection('posts')
  .orderBy('date')
  .limit(6)
  .get()

  const trendingposts = snapshot2.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })

  const tomorrowDate = new Date();
  const currentMonth = tomorrowDate.getMonth()+1;
  let tomorrow = '';
  if(currentMonth<10){
    tomorrow = tomorrowDate.getFullYear() + '-0' + currentMonth + '-' + (tomorrowDate.getDate() + 1);
  }else{
    tomorrow = tomorrowDate.getFullYear() + '-' + currentMonth + '-' + (tomorrowDate.getDate() + 1);
  }

  const snapshot3 = await db
  .collection('posts')
  .where('date', '==', tomorrow)
  .limit(1)
  .get()

  const post = snapshot3.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })

  return {
    props: {
      allposts: JSON.parse(JSON.stringify(allposts)),
      trendingposts: JSON.parse(JSON.stringify(trendingposts)),
      post: JSON.parse(JSON.stringify(post))
    },
  }
}