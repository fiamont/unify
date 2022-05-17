import React from 'react';
import Head from 'next/head'
import NewPost from '../components/new';
import styles from '../styles/Home.module.css'



function EventForm(){
    return(
        <div>
            <Head><title>Unify - Skapa event</title></Head>
            <main className={styles.main}>
              
                {/* <MultiStepForm /> */}
                <NewPost />
            </main>
        </div>
        
    )}
export default EventForm;
