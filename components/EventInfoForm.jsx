import React from 'react'
import style from './../styles/MultiStepForm.module.css'

function EventInfoForm({ formData, setFormData }) {
    
  return (
      <div className={style.eventInfoContainer}>
        <input 
            className={style.userName}
          type="text"
          placeholder="Ange ditt namn"
          value={formData.userName}
          onChange={(event) =>
            setFormData({ ...formData, userName: event.target.value })
          } />
         
        <input 
          type="text"
          placeholder="Evenemangs namn"
          value={formData.eventName}
          onChange={(event) =>
            setFormData({ ...formData, eventName: event.target.value })
          } />
        
        <div className={style.inputDateTime}>
        <label htmlFor="date">Datum:</label>
        <input 
            type="date" 
            value={formData.date} id="date" 
            name="date" 
            onChange={(event) =>
                setFormData({ ...formData, date: event.target.value })
              }></input>

        <label htmlFor="appt">Tid:</label>
        <input 
            type="time" value={formData.time} 
            id="appt" name="appt" 
            onChange={(event) =>
                setFormData({ ...formData, time: event.target.value })
              }></input>
        </div>

        <div className={style.location}>
        <input 
            type="text" 
            placeholder="Plats" 
            value={formData.location}
            onChange={(event) =>
            setFormData({ ...formData, location: event.target.value })
          }/>
        </div>
        
        <div className={style.solidLine} />

        <select
                className={style.subject}
                value={formData.category}
                onChange={(event) =>
                    setFormData({ ...formData, category: event.target.value })
                  }
            >
            <option label="Välj kategori"></option>
            <option value="Konsert">Konsert</option>
            <option value="Quiz">Quiz</option>
            <option value="Mat & Dryck">Mat & Dryck</option>
            <option value="Uteliv">Uteliv</option>
            <option value="Kultur & Livsstil">Kultur & Livsstil</option>
            <option value="Guider">Guider</option>
            <option value="Sport & Fritid">Sport & Fritid</option>
            <option value="Konst & Hantverk">Konst & hantverk</option>
            <option value="Hälsa & Skönhet">Hälsa & Skönhet</option>
        </select> 

      </div>
    )
  }
  
  export default EventInfoForm