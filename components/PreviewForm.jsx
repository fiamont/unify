import React, { useState } from 'react'
import style from './../styles/MultiStepForm.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
import CategorySelector from '../components/CategorySelector'
import Image from 'next/image'

import Arrow from './Icons/arrow';
import Link from 'next/link';
import Participants from './Icons/Participants';


function PreviewInfoForm({ prevStep, values }) {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([]) //Array of string 
  const router = useRouter()

  const [show, setShow] = useState(false);
    //PopUp 
    const [showModalCancel, setShowModalCancel] = useState(false);

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
      /*   router.push(`/posts/${postId}`) */
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
   
    setShowModalCancel(true)
  
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
            <button className={style.cancelBtn} onClick={onSubmit}>Avbryt</button>
          </div>
          <h1>Granska evenemang</h1>
        </div>
        <div className={style.container}>
            <div className={style.outerborder} style={{background: CategorySelector(values.category).lightColor}}>
                <div className={style.innerBorder} style={{background: CategorySelector(values.category).darkColor}}>
                    <div className={style.imgWrapper}>
                        <Image className={style.eventimg} src={CategorySelector(values.category).eventImage} alt='eventbild' width="500" height="333"/>
                    </div>
                    <div className={style.categoryBox} style={{background: CategorySelector(values.category).categoryBox}}>
                        <p className={style.categoryText}>{values.category}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.previewBox1}>
          <div className={style.previewDateTime}>
            <div className={style.previewDate}>
              <input
                name="date"
                value={date}
              />
            </div>
            <div className={style.previewTime}>
              <p>Kl.</p>
                <input
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
        <input
          className={style.previewEventName}
          name="location"
          value={location}
        />
        <input
          className={style.previewEventName}
          name="city"
          value={city}
        />
        
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
        
        <div className={style.previewTextareaContainer}>
          <div className={style.priceParticipantsSymbol}><Participants/></div>Beskrivning
        
          <button className={style.backBtn} variant="primary" onClick={prevStep}>
            <Arrow />
          </button>
        </div>
        <div className={style.previewTextarea}>
          <textarea
          type="text"
          name="description"
          value={description}
          cols={1}
          rows={1}
          />
        </div>

        <div className={style.progressDots}>
                        <div className={style.progressDotFilled}/>
                        <div className={style.progressDotFilled} />
                        <div className={style.progressDotFilled}/>
                    </div>

        <div className={style.previewSubmitBtn}>
          <button className={style.submitBtn} type='submit'>Submit</button>
        </div>
      </form>

      {showModal ? (
            <div className={style.showModal}>
                <div className={style.showModalInner}>
                <div className={style.partyImg}></div>
                <h2>BINGOOO! <br/> DIT EVENEMANG HAR SKAPATS</h2>
                <p>Grymt Jobbat! Du har puplicerat ditt <br/> första evenemang!</p>
                <div className={style.solidLinePopUp} />
                <div className={style.buttonContainer}>
                    <Link href="/" passHref><button className={style.okPopupBtn} >OK</button></Link>
                  </div>
                </div>
            </div>

        ) : null }

{showModalCancel ? (
            <div className={style.showModal}>
                <div className={style.showModalInner}>
                  <div className={style.cancelContainer}>
                      <h2>AVSLUTA UTAN ATT SLUTFÖRA?</h2>
                      <p>Om du lämnar nu skapas inte ditt <br/> evenemang och det du hitills har gjort <br/> sparas inte.</p>
                      <Link href="/" passHref><button className={style.cancelBtnPopup}>AVSLUTA</button></Link>
                      <div className={style.solidLinePopUp} />
                      <button className={style.continueEditBtnPopup} onClick={() => setShowModalCancel(false)}>FORTSÄTT+REDIGERA</button>
                  </div>
                </div>
            </div>

        ) : null }
    </div> 
  );
}

export default PreviewInfoForm