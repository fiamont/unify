import React, { useState } from 'react'
import style from './../styles/ModalForm.module.css'
import SvgFormBackground from './Icons/formBackground';

const Modals = () => {
    const [title, setTitle] = useState(''); //input rutan är tom från början
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = { title, category, body, time, date };
    
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
                <input type="time" value={time} id="appt" name="appt" onChange={(e) => setTime(e.target.value)}></input>

                <label htmlFor="date">Datum:</label>
                <input type="date" value={date} id="date" name="date"onChange={(e) => setDate(e.target.value)}></input>
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
            </div> 

            <div className={style.box2}>

            <button 
                className={style.submitBtn} 
                type="button" 
                onClick={() => setShowModal(true)}
                >
            Skapa event</button>
                </div>
        </form>
        
        {showModal ? (
            <div className={style.showModal}>
                <div className={style.showModalInner}>
                    <form className={style.eventform} onSubmit={handleSubmit}>
                        <input 
                            className={style.eventName}
                            type="text" 
                            required 
                            value={title}
                            name="name"
                        />

                        <select
                            className={style.subject}
                            value={category}
                            required
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
                            <input type="time" value={time} id="appt" name="appt"></input>

                            <label htmlFor="date">Datum:</label>
                            <input type="date" value={date} id="date" name="date"></input>
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
                                name="message"
                            ></textarea>
                            <button className={style.submitBtn} type="submit">Dela</button>
                            <button onClick={() => setShowModal(false)}>Ändra</button>
                        </div> 
                    </form>
                </div>
            </div>

        ) : null }

    </div>

  );
};

export default Modals;