import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import ChooseCity from '../components/ChooseCity'
import { useState } from "react";


import React from 'react'
import { db } from '../utils/firebase'

export default function HanderIdag({ posts }) {
  const [chosenCity, setChosenCity] = useState('');
  console.log(chosenCity)
  
  return (
    <div className={styles.container}>
      <Head><title>Unify - Alla kategorier</title></Head>
      <Eventbutton/> 
      <main className={styles.main}>
      <h1 className={styles.rubrik}>Alla kategorier</h1>
      <div>
            <select 
                name="city" 
                value={chosenCity}
                onChange={(e) => setChosenCity(e.target.value)}>
                    <option>Välj stad</option>
                    <option value="Alla">Alla städer</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Göteborg">Göteborg</option>
                    <option value="Malmö">Malmö</option>
                    <option value="Uppsala">Uppsala</option>
                    <option value="Västerås">Västerås</option>
                    <option value="Örebro">Örebro</option>
                    <option value="Linköping">Linköping</option>
                    <option value="Lund">Lund</option>
                    <option value="Jönköping">Jönköping</option>
                    <option value="Umeå">Umeå</option>
                </select>
        </div>
      {/* <ChooseCity/> */}
      <BackToTop />
      <Event events={!chosenCity || chosenCity == 'Alla' || chosenCity == 'Välj stad' ? posts : posts.filter((post) => post.city === chosenCity)}/> 
      {/* <Event events={posts}/> */}
      </main>
    </div> 
     
      )
    }

//Server side code
export async function getServerSideProps(){
const valdstad = "Stockholm";
	const snapshot = await db
        .collection('posts')
        // .where('city', '==', valdstad)
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