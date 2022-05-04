import React from 'react';
import Head from 'next/head'
import Modals from '../components/ModalForm';

function EventForm(){
    return(
        <div>
            <Head><title>Unify - Skapa event</title></Head>
            <main>
                <h1>Skapa Event</h1>
                <Modals />
            </main>
        </div>
        
    )}
export default EventForm;
