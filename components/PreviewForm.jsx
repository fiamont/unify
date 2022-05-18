import React, { useState } from 'react'
import style from './../styles/MultiStepForm.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'

import { Form, Card, Button } from "react-bootstrap";
import validator from "validator"


function PreviewInfoForm({ formDatas, prevStep, values }) {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([]) //Array of string 
  const router = useRouter()

  const [show, setShow] = useState(false);

     //creating error state for validation
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const body = Object.fromEntries(formData.entries())
   

    // make an http requset
    // request the endpoint that will create this new post
    // POSTS /api/posts
    // fetch('/api/posts', {method: 'POST'})

    setIsLoading(true)
   axios.post('/api/posts', body)
        .then((res) => {
        const postId = res.data.id
        router.push(`/posts/${postId}`)
   })
   .catch((err) => {
       setErrors(err.response.data.errors)
   })
    .finally(() => {
    setIsLoading(false)
   })
  };
  const submitFormData = (e) => {
    e.preventDefault();
  
     // checking if value of first name and last name is empty show error else take to next step
    if (
      validator.isEmpty(values.eventName)) 
      {
      setError(true);
    } else {
      console.log(values);
    }
  
}

           //destructuring the object from values
           const { eventName, date, time, category, location, textarea, price, numbOfParticipants, city } = values;
  return (
    <>
    <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
              <p
              name="eventName"
              defaultValue={values.eventName}
              value={eventName}>
            <strong>Evenemangs namn :</strong> {eventName}{" "}
            
              </p>
              <p>
            <strong>Datum :</strong> {date}{" "}
          </p>
          <p>
            <strong>Tid :</strong> {time}{" "}
          </p>
          <p>
            <strong>Kategori :</strong> {category}{" "}
          </p>
          <p>
            <strong>Plats :</strong> {location}{" "}
          </p>
          <p>
            <strong>Stad :</strong> {city}{" "}
          </p>
          <p>
            <strong>Beskrivning :</strong> {textarea}{" "}
          </p>
          <p>
            <strong>Pris :</strong> {price}{" "}
          </p>
          <p>
            <strong>Antal deltagare :</strong> {numbOfParticipants}{" "}
          </p>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>
            </div>

         
            <button type='submit'>Submit</button>

            </Form>
        </Card.Body>
      </Card>
    </>

    /* <form onSubmit={handleSubmit}>
    <div className={style.previewInfoContainer}>
        <div className={style.eventPic}>
        <input
              className={style.previewCategory}
              name="category"
              value={formDatas.category}
              >
            </input>
        </div>
       <div className={style.previewBox1}>
           <div className={style.previewDateTime}>
             <div className={style.date}>
                <p>Datum:</p>
                <input
                    type="text"
                    name="date"
                    value={formDatas.date}
                 />
              </div>
              <div className={style.time}>
                <p>Kl.</p>
                <input
                    className={style.previeTime}
                    type="text"
                    name="time"
                    value={formDatas.time}
                />
              </div>
            </div>
            <input
            className={style.previewEventName}
            type="text"
            name="eventName"
            value={formDatas.eventName}
            />
        </div>
        <div className={style.previewPriceBox}>
        <p>Pris</p>
        <input
            className={style.previewPrice}
            type="text"
            name="price"
            value={formDatas.price}
            />
        </div>
        <div className={style.previewPriceBox}>
            <p>Antal deltagare</p>
            <input
            className={style.previewNumbOfParticipants}
            type="text"
            name="numbOfParticipants"
            value={formDatas.numbOfParticipants}
            />
          </div>
        {show &&
        <textarea
        className={style.previewTextarea}
        type="text"
        name="description"
        value={formDatas.textarea}
        />
        }
        <button className={style.showHideBtn} type="button" onClick={() => setShow(!show)}>
          {show === true ? 'Stäng' : 'Läs beskrivning'}
        </button>
                   
        <div className={style.previewSubmitBtn}>
          <button className={style.submitBtn} type="submit"disabled={isLoading}>Publicera evenemang</button>
        </div>

    </div>
    </form> */

  );
}

export default PreviewInfoForm