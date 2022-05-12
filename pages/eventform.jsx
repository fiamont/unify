import React from 'react';
import Head from 'next/head'

import MultiStepForm from './posts/MultiStepForm';

function EventForm(){
    return(
        <div>
            <Head><title>Unify - Skapa event</title></Head>
            <main>
              
                <MultiStepForm />
            </main>
        </div>
        
    )}
export default EventForm;
