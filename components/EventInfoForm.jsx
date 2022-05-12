import React from 'react'
import style from './../styles/MultiStepForm.module.css'

function EventInfoForm({ formDatas, setFormDatas }) {
    
  return (
      <div className={style.eventInfoContainer}>
        <input  htmlFor="userName"
            className={style.userName}
          type="text"
          id="userName"
          name="userName"
          placeholder="Ange ditt namn"
          value={formDatas.userName}
          onChange={(event) =>
            setFormDatas({ ...formDatas, userName: event.target.value })
          } />
         
        <input  htmlFor="EventName"
          type="text"
          id="eventName"
          name="eventName"
          placeholder="Evenemangs namn"
          value={formDatas.eventName}
          onChange={(event) =>
            setFormDatas({ ...formDatas, eventName: event.target.value })
          } />
        
        <div className={style.inputDateTime}>
        <label htmlFor="date">Datum:</label>
        <input 
            type="date" 
            value={formDatas.date} id="date" 
            name="date" 
            onChange={(event) =>
                setFormDatas({ ...formDatas, date: event.target.value })
              }></input>

        <label htmlFor="appt">Tid:</label>
        <input 
            type="time" value={formDatas.time} 
            id="time" name="time" 
            onChange={(event) =>
                setFormDatas({ ...formDatas, time: event.target.value })
              }></input>
        </div>

        <div className={style.location}>
        <input 
            type="text" 
            id="location"
            name="location"
            placeholder="Plats" 
            value={formDatas.location}
            onChange={(event) =>
            setFormDatas({ ...formDatas, location: event.target.value })
          }/>
        </div>
        
        <div className={style.solidLine} />

        <select
                className={style.subject}
                value={formDatas.category}
                onChange={(event) =>
                    setFormDatas({ ...formDatas, category: event.target.value })
                  }
            >
            <option label="Välj kategori"></option>
            <option value="Konsert, Quiz & Uteliv">Konsert, Quiz & Uteliv</option>
            <option value="Mat & Dryck">Mat & Dryck</option>
            <option value="Kultur & Livsstil">Kultur & Livsstil</option>
            <option value="Sport & Fritid">Sport & Fritid</option>
            <option value="Konst & Hantverk">Konst & hantverk</option>
        </select> 

      </div>
    )
  }
  
  export default EventInfoForm