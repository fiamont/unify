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
      {/* {posts.map((post) => {
        return (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
          <a>{post.userName}</a>
          </Link>
        </li>
        )
      })} */}
   
      </main>
    </div> 
     
      )
    }

//Server side code
export async function getServerSideProps(){
	const snapshot = await db
        .collection('posts')
        //.where("date", "==", "dagens datum")
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