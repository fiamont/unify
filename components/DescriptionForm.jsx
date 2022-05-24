import React, { useState } from 'react'
import style from './../styles/MultiStepForm.module.css'
import Arrow from './Icons/arrow';
import Link from 'next/link';

function DescriptionInfoForm({ nextStep, handleFormData, prevStep, values }) {
  //creating error state for validation
  const [error, setError] = useState(false);

  //PopUp 
  const [showModalCancel, setShowModalCancel] = useState(false);

   //VALIDATION
   const [descriptionErr, setDescriptionErr] = useState({});

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    const isValid = formValidation();
      if(isValid){
        nextStep()
      }
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    setShowModalCancel(true)
  }

  const formValidation = () => {
    const descriptionErr = {};
    let isValid = true;

    if(values.description.trim().length < 5){
      descriptionErr.chooseDescription = "Beskrivningen måste innehålla minst 5 bokstäver";
      isValid = false
    }

    setDescriptionErr(descriptionErr);
    return isValid;
  }

  return (
    <div className={style.eventInfoContainer}>
      <div className={style.form}>
        <div className={style.header}>
          <div className={style.headerBtn}>
            <button className={style.backBtn} variant="primary" onClick={prevStep}>
              <Arrow />
            </button>
            <button className={style.cancelBtn} onClick={onSubmit}>Avbryt</button>
          </div>
          <h1>Beskrivning</h1>
        </div>
        <div className={style.descriptionText}>
          <p>Ange mer information om ditt evenemang så att gästerna vet vad de ska vänta sig</p>
        </div>
  
        <form className={style.formTag} onSubmit={submitFormData}>
          <div className={style.descriptionDiv}>
            <textarea 
            className={style.descriptionArea}
            style={{ border: error ? "2px solid red" : "" }}
            name="description"
            id="exampleFormControlTextarea1"
            rows="5"
            defaultValue={values.description}
            onChange={handleFormData("description")}
            />
            <div className={style.descriptionErrorMessage}>
            {Object.keys( descriptionErr).map((key)=>{
                return <div key={key} style={{color : "red"}}>{ descriptionErr[key]}</div>
            })}
            </div>  
          </div> 

          <div className={style.progressDots}>
            <div className={style.progressDotFilled}/>
            <div className={style.progressDotFilled}/>
            <div className={style.progressDotEmpty}/>
          </div>

          <button className={style.nextPageBtn} variant="primary" type="submit">
            Nästa
          </button>
        </form>

        {showModalCancel ? (
          <div className={style.showModal}>
              <div className={style.showModalInner}>
                <div className={style.cancelContainer}>
                    <h2>AVSLUTA UTAN ATT SLUTFÖRA?</h2>
                    <p>Om du lämnar nu skapas inte ditt <br/> evenemang och det du hittills har gjort <br/> sparas inte.</p>
                    <Link href="/" passHref><button className={style.cancelBtnPopup}>AVSLUTA</button></Link>
                    <div className={style.solidLinePopUp} />
                    <button className={style.continueEditBtnPopup} onClick={() => setShowModalCancel(false)}>FORTSÄTT REDIGERA</button>
                </div>
              </div>
          </div>
        ) : null }

      </div>
    </div>
  )    
}

export default DescriptionInfoForm