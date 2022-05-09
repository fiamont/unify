import MultiStepForm from "../components/MultiStepForm";
import Head from "next/head";
import React from 'react'

function formTest() {
  return (
    <div>
        <Head> <title>Unify - Skapa event</title></Head>
        <main>
            <MultiStepForm />
        </main>
    </div>
  )
}

export default formTest