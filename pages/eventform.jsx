import React from 'react';
import Form from '../components/Form'
import Head from 'next/head'

function EventForm(){
    return(
        <div>
            <Head><title>Unify - Skapa event</title></Head>
            <main>
                <h1>Skapa Event</h1>
                <Form/>
            </main>
        </div>
        
    )}
export default EventForm;
