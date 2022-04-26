import React from 'react';
import Eventbutton from '../components/Eventbutton'
import Head from 'next/head'

function Profile(){
    return(
        <div id="profile-body">
          <Head><title>Unify - Profil</title></Head>
          <main>
          <Eventbutton/>  
          <h1>Mina event</h1>
          </main>
      </div>
    )}
export default Profile;
