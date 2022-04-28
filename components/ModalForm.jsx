import React, { useState } from 'react'
import style from './../styles/ModalForm.module.css'
import SvgFormBackground from './Icons/formBackground';
import { useRouter } from 'next/router';

const Modals = () => {
    const [title, setTitle] = useState(''); //input rutan är tom från början
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    //Validation
    const [titleErr, setTitleErr] = useState({});
    const [bodyErr, setBodyErr] = useState({});

     //PopUp 
    const [showModal, setShowModal] = useState(false);
    
    //Timeout
    const router = useRouter();

    const onSubmit = (e) =>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            //Open Popup window
            setShowModal(true)
 
        }
    }

    const formValidation = () => {
        const titleErr = {};
        const bodyErr = {};
        let isValid = true;

        if(title.trim().length < 5){
            titleErr.firstNameShort = "Evenemanget måste ha ett namn på minst 5 bokstäver";
            isValid = false
        }

        if(body.trim().length < 2){
            bodyErr.textareaShort = "Beskriv kort om evenemanget";
            isValid = false
        }

        setTitleErr(titleErr);
        setBodyErr(bodyErr);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = { title, category, body, time, date }; 
        console.log(event);
    }

    const handleClick = () => {
            setTimeout(() => {
                router.push('/');
            }, 500)
    } 

  return (
    <div className={style.flexContainer} key="1">
        <form onSubmit={onSubmit} className={style.eventform}>
            <input 
                className={style.eventName}
                type="text" 
                id="name"
                value={title}
                placeholder="Evenemangets namn"
                name="name"
                onChange={(e) => {setTitle(e.target.value)}}
                
            />
            <br/>
           {/*  {Object.keys(titleErr).map((key)=>{
                return <div style={{color : "red"}}>{titleErr[key]}</div>
            })} */}

            <select
                className={style.subject}
                value={category}
        
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
              
                    value={body}
                    rows={5}
                    placeholder="Beskrivning"
                    name="message"
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {/* {Object.keys(bodyErr).map((key)=>{
                    return <div style={{color : "red"}}>{bodyErr[key]}</div>
                })} */}
                
            
            </div> 

            <div className={style.box2}>
                <button 
                className={style.configBtn} 
                type="submit" 
                onClick={onSubmit}
/*                 onClick={() => setShowModal(true)} */
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
                           
                            value={title}
                            name="name"
                        />

                        <select
                            className={style.subject}
                            value={category}
                         
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
                             
                                value={body}
                                rows={5}
                                name="message"
                            ></textarea>
                            <div className={style.buttonContainer}>
                                <button className={style.submitBtn} onClick={handleClick} type="submit">Dela</button>
                                <button className={style.cancelBtn} onClick={() => setShowModal(false)}>Ändra</button>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>

        ) : null }

    </div>

  );
};

export default Modals;