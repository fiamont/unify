import React from 'react';
import Head from 'next/head'

import MultiStepForm from './MultiStepForm';
import NewPost from '../../components/new';

function EventForm(){
    return(
        <div>
            <Head><title>Unify - Skapa event</title></Head>
            <main>
              
                {/* <MultiStepForm /> */}
                <NewPost />
            </main>
        </div>
        
    )}
export default EventForm;
