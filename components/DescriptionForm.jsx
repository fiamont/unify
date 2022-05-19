import React, { useState } from 'react'
import style from './../styles/MultiStepForm.module.css'
import Participants from './Icons/Participants';
import Payments from './Icons/payments';

import { Form, Card, Button } from "react-bootstrap";
import validator from "validator"
import Arrow from './Icons/arrow';
import Link from 'next/link';

function DescriptionInfoForm({ formDatas, setFormDatas, nextStep, handleFormData, prevStep, values }) {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();

   // checking if value of first name and last name is empty show error else take to next step
  if (
    validator.isEmpty(values.description)) 
    {
    setError(true);
  } else {
    nextStep();
  }
};
  return (
 
    <div className={style.eventInfoContainer}>
      <div className={style.form}>
        <div className={style.header}>
          <div className={style.headerBtn}>
            <button className={style.backBtn} variant="primary" onClick={prevStep}>
              <Arrow />
            </button>
          <Link href="/"><button className={style.cancelBtn}>Avbryt</button></Link>
          </div>
          <h1>Beskrivning</h1>
        </div>
        <div className={style.descriptionText}>
          <p>Ange mer information om ditt evenemang så att gästerna vet vad de ska vänta sig</p>
        </div>
  
        <form onSubmit={submitFormData}>
          <div className={style.title}>
            <textarea 
            className={style.descriptionArea}
            style={{ border: error ? "2px solid red" : "" }}
            name="description"
            id="exampleFormControlTextarea1"
            rows="5"
            defaultValue={values.textarea}
            onChange={handleFormData("description")}/>
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </div>

          <div className={style.solidLine} />

          <div className={style.priceAndParticipants}>
            <div className={style.priceParticipantsInner}>   
              <div className={style.priceParticipantsSymbol}><Payments/></div>PRIS  
            
                <input
                  style={{ border: error ? "2px solid red" : "" }}
                  name="price"
                  defaultValue={values.price}
                  type="text"
                  onChange={handleFormData("price")}
                />
            
              <label className={style.krSt}>KR</label>
            </div>
            <div className={style.priceParticipantsInner}>
              <div className={style.priceParticipantsSymbol}><Participants/></div>ANTAL DELTAGARE
                <input
                  style={{ border: error ? "2px solid red" : "" }}
                  name="price"
                  defaultValue={values.numbOfParticipants}
                  type="text"
                  onChange={handleFormData("numbOfParticipants")}
                />
                <label className={style.krSt}>ST</label>
              </div>
            </div>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className={style.nextPageBtn} variant="primary" type="submit">
            Continue
            </button>
          </div>

        </form>
      </div>
    </div>
  )    
}

export default DescriptionInfoForm