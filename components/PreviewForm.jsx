import React from 'react'
import style from './../styles/MultiStepForm.module.css'

function PreviewInfoForm({ formData, setFormData }) {
  return (
    <div className={style.previewInfoContainer}>
        <div className={style.eventPic}></div>
       <div className={style.previewBox1}>
           <div className={style.previewDateTime}>
                <input
                    className={style.previewDate}
                    type="text"
                    value={formData.date}
                 />
                <input
                    className={style.previewDate}
                    type="text"
                    value={formData.time}
                />
            </div>
            <input
            className={style.previewEventName}
            type="text"
            value={formData.eventName}
            />
            <input
            className={style.previewUserName}
            type="text"
            value={"Anordnat av " + formData.userName}
            />
        </div>
        <textarea
        className={style.previewTextarea}
        type="text"
        value={formData.textarea}
        />
     
    </div>
  );
}

export default PreviewInfoForm