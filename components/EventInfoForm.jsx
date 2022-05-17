import React from 'react'
import style from './../styles/MultiStepForm.module.css'

function EventInfoForm({ formDatas, setFormDatas }) {
    
  return (
    <div className={style.eventInfoContainer}>
      <div className={style.categoryBox}>
        <select
          className={style.category}
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
        
      <div className={style.title} >
        <p>Evenemangets namn</p>
        <input
          type="text"
          name="eventName"
          value={formDatas.eventName}
          onChange={(event) =>
          setFormDatas({ ...formDatas, eventName: event.target.value })
        } />
      </div>
        
      <div className={style.inputDateTime}>
        <label>Datum:</label>
        <input 
          type="date" 
          value={formDatas.date}
          name="date" 
          onChange={(event) =>
          setFormDatas({ ...formDatas, date: event.target.value })
        }></input>

        <label>Tid:</label>
        <input 
          type="time" value={formDatas.time} 
          name="time" 
          onChange={(event) =>
          setFormDatas({ ...formDatas, time: event.target.value })
        }></input>
      </div>

      <div className={style.title}>
        <p>Plats</p>
        <input 
          className={style.location}
          type="text" 
          id="location"
          name="location"
          value={formDatas.location}
          onChange={(event) =>
          setFormDatas({ ...formDatas, location: event.target.value })
        }/>
      </div>        
    </div>
  )
}
  
export default EventInfoForm