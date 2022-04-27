import React, { useState } from "react";
import SvgFormBackground from "./Icons/formBackground";
import style from './../styles/Form.module.css'

const Form = () => {
  const [title, setTitle] = useState(''); //input rutan är tom från början
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, body, category };

    console.log(event);
  }

  return (
  <div className={style.flexContainer}>
    <form className={style.eventform} onSubmit={handleSubmit}>

      <input 
        className={style.eventName}
        type="text" 
        required 
        value={title}
        placeholder="Evenemangets namn"
        name="name"
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
      className={style.subject}
        value={category}
        required
        onChange={(e) => setCategory(e.target.value)}
      >
        <option label="Välj kategori"></option>
        <option value="konsert">Konsert</option>
        <option value="quiz">Quiz</option>
        <option value="mat&dryck">Mat & Dryck</option>
        <option value="kultur&livsstil">Kultur & Livsstil</option>
        <option value="guider">Guider</option>
        <option value="sport&fritid">Sport & Fritid</option>
        <option value="konst&hantverk">Konst & hantverk</option>
        <option value="hälsa&skönhet">Hälsa & Skönhet</option>
      </select>

      <div className={style.inputDateTime}>
        <label htmlFor="appt">Tid:</label>
        <input type="time" id="appt" name="appt"></input>

        <label htmlFor="date">Datum:</label>
        <input type="date" id="date" name="date"></input>
      </div>
      
      <div className={style.box}>
        <div className={style.test}>
          <SvgFormBackground className="backImg"/>
        </div>
        <textarea
          className={style.description}
          required
          value={body}
          rows={5}
          placeholder="Beskrivning"
          name="message"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
    
        
         {/*  <button className={style.submitBtn} type="submit">Skapa event</button> */}
      </div>                  
    </form>


  </div>
  
);
};
 
export default Form;