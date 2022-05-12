import React from 'react'
import style from './../styles/MultiStepForm.module.css'

function DescriptionInfoForm({ formData, setFormData }) {
    return (
        <div className={style.eventInfoContainer}>

          <div className={style.descriptionText}>
            <p>Ange mer information om ditt evenemang så att gästerna vet vad de ska vänta sig</p>
          </div>

          <textarea
          className={style.descriptionArea} 
          type="text"
          placeholder="Beskrivning"
          value={formData.textarea}
          onChange={(e) => {
            setFormData({ ...formData, textarea: e.target.value });
          }} />

        <div className={style.solidLine} />

        <div className={style.priceAndParticipants}>

          <div className={style.priceInner}>PRIS
          <input
            type="text"
            value={formData.price}
            onChange={(e) => {
                setFormData({ ...formData, price: e.target.value });
            }}
            />
            </div>

            <div className={style.participantsInner}>ANTAL DELTAGARE
          <input
            type="text"
            value={formData.numbOfParticipants}
            onChange={(e) => {
                setFormData({ ...formData, numbOfParticipants: e.target.value });
            }}
            /> 
            </div>
        </div>
        </div>
      );
}

export default DescriptionInfoForm