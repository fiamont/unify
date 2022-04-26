import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Topnavbar from '../components/Topnavbar/Topnavbar'
import Eventbutton from '../components/Eventbutton'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unify</title>
      </Head>

      <main className={styles.main}>
      
      <Eventbutton/>
        {/* <Topnavbar/> */}
        
        <h1>I Blickfånget</h1>
      </main>

    </div>
  )
}
