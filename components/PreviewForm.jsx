import React, { useState } from 'react'
import style from './../styles/MultiStepForm.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'

import { Form, Card, Button } from "react-bootstrap";
import validator from "validator"
import Arrow from './Icons/arrow';
import Link from 'next/link';


function PreviewInfoForm({ prevStep, values }) {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([]) //Array of string 
  const router = useRouter()

  const [show, setShow] = useState(false);

     //creating error state for validation
  const [error, setError] = useState(false);

  //PopUp 
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowModal(true)
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
        /* router.push(`/posts/${postId}`) */
        router.push(showModal()) 
   })
   .catch((err) => {
       setErrors(err.response.data.errors)
   })
    .finally(() => {
    setIsLoading(false)
   })
  };

  const onSubmit = (e) =>{
    e.preventDefault();
     setShowModal(true)

}

const handleClick = () => {
  /*  addDoc(dbInstance, {
       title: title,
       category: category,
       body: body,
       time: time,
       date: date
   }) */
   setTimeout(() => { 
       router.push('/');
   }, 500)
}

  const submitFormData = (e) => {
    e.preventDefault();
    setShowModal(true)
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
  const { eventName, date, time, category, location, description, price, numbOfParticipants, city } = values;
  return (
    <div className={style.previewinfoContainer}>
        <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.header}>
          <div className={style.headerBtn}>
            <button className={style.backBtn} variant="primary" onClick={prevStep}>
              <Arrow />
            </button>
          <Link href="/" passHref><button className={style.cancelBtn}>Avbryt</button></Link>
          </div>
          <h1>Granska evenemang</h1>
        </div>
       
        <div className={style.eventPic}>
          <input
          className={style.previewCategory}
          name="category"
          value={category}
          />
        </div>
        <div className={style.previewBox1}>
          <div className={style.previewDateTime}>
            <div className={style.date}>
              <p>Datum:</p>
              <input
                name="date"
                value={date}
              />
            </div>
            <div className={style.time}>
              <p>Kl.</p>
                <input
                className={style.previeTime}
                name="time"
                value={time}
                />
            </div>
          </div>
          <input
          className={style.previewEventName}
          name="eventName"
          value={eventName}
          />
        </div>
        <div className={style.previewPriceBox}>
          <p>Pris</p>
            <input
            className={style.previewPrice}
            name="price"
            value={price}
            />
        </div>
        <div className={style.previewPriceBox}>
          <p>Antal deltagare</p>
          <input
          className={style.previewNumbOfParticipants}
          name="numbOfParticipants"
          value={numbOfParticipants}
          />
        </div>
        
        {show &&
        <textarea
        className={style.previewTextarea}
        type="text"
        name="description"
        value={description}
        />
        }
        <button className={style.showHideBtn} type="button" onClick={() => setShow(!show)}>
          {show === true ? 'Stäng' : 'Läs beskrivning'}
        </button>

        <div className={style.previewSubmitBtn}>
        <button 
          className={style.submitBtn} 
          >Skapa event
          </button>
        </div>
      </form>

      {showModal ? (
      <div className={style.showModal}>
          <div className={style.showModalInner}>
            <div className={style.buttonContainer}>
             {/*  <button className={style.cancelPopupBtn} onClick={() => setShowModal(false)}>Ändra</button> */}
             <button className={style.submitBtn} onClick={handleClick} type="submit">Ok</button>
            </div>
          </div>
      </div>

      ) : null }
    </div> 

  );
}

export default PreviewInfoForm