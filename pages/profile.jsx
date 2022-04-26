import React from 'react';
import Eventbutton from '../components/Eventbutton'
import Head from 'next/head'
import style from '../styles/Profile.module.css'

function Profile(){
    return(
        <div id="profile-body">
          <Head><title>Unify - Profil</title></Head>
          <main>
          <Eventbutton/> 
          <h1 className={style.rubrik}>Mina sparade event</h1>
          <div className={style.underrubriker}>
          <h2>Kommande</h2>
          <h2>Tidigare</h2>
          </div>
          </main>
      </div>
    )}
export default Profile;
