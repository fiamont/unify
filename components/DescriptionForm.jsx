import React, { useState } from 'react'
import style from './../styles/MultiStepForm.module.css'
import Participants from './Icons/Participants';
import Payments from './Icons/payments';

import { Form, Card, Button } from "react-bootstrap";
import validator from "validator"

function DescriptionInfoForm({ formDatas, setFormDatas, nextStep, handleFormData, prevStep, values }) {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();

   // checking if value of first name and last name is empty show error else take to next step
  if (
    validator.isEmpty(values.textarea)) 
    {
    setError(true);
  } else {
    nextStep();
  }
};
    return (
      <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className={style.title}>
              <Form.Control as="textarea" 
              className={style.descriptionArea}
              style={{ border: error ? "2px solid red" : "" }}
              name="textarea"
              id="exampleFormControlTextarea1"
              rows="5"
              defaultValue={values.textarea}
              onChange={handleFormData("textarea")}/>
           
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Fel
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <div className={style.priceAndParticipants}>     
            <Form.Group>
            <Form.Label>PRIS</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="price"
                defaultValue={values.price}
                type="text"
                onChange={handleFormData("price")}
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>ANTAL DELTAGARE</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="price"
                defaultValue={values.numbOfParticipants}
                type="text"
                onChange={handleFormData("numbOfParticipants")}
              />
            </Form.Group>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
              Continue
              </Button>
            </div>

            </Form>
        </Card.Body>
      </Card>
    </>
        /* <div className={style.eventInfoContainer}>

          <div className={style.descriptionText}>
            <p>Ange mer information om ditt evenemang så att gästerna vet vad de ska vänta sig</p>
          </div>

          <textarea
          className={style.descriptionArea} 
          type="text"
          placeholder="Lägg till beskrivning"
          value={formDatas.textarea}
          onChange={(e) => {
            setFormDatas({ ...formDatas, textarea: e.target.value });
          }} />

        <div className={style.solidLine} />

        <div className={style.priceAndParticipants}>

          
          <div className={style.priceParticipantsInner}>
            <div className={style.priceParticipantsSymbol}><Payments/></div>PRIS
            <input
            type="text"
            value={formDatas.price}
            onChange={(e) => {
                setFormDatas({ ...formDatas, price: e.target.value });
            }}
            />
            <label className={style.krSt}>KR</label>
            </div>
            <div className={style.priceParticipantsInner}>
              <div className={style.priceParticipantsSymbol}><Participants/></div>ANTAL DELTAGARE
          <input
            type="text"
            value={formDatas.numbOfParticipants}
            onChange={(e) => {
                setFormDatas({ ...formDatas, numbOfParticipants: e.target.value });
            }}
            /> 
            <label className={style.krSt}>ST</label>
            </div>
        </div>
        </div>
      ); */
    )    
}

export default DescriptionInfoForm