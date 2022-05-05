import React, { useState, useEffect } from 'react'
import style from './../styles/ModalForm.module.css'
import SvgFormBackground from './Icons/formBackground';
import { useRouter } from 'next/router';
import Event from './Event';


import { app, database } from './../firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'


const Modals = () => {
    const [title, setTitle] = useState(''); //input rutan är tom från början
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const dbInstance = collection(database, 'events'); /*It takes the database from the firebaseConfig import and the name of the collection.*/
    // const [notesArray, setNotesArray] = useState([]);

    //  const getNotes = () => {
    //     getDocs(dbInstance)
    //         .then((data) => {
    //             setNotesArray(data.docs.map((item) => {
    //                 return { ...item.data(), id: item.id }
    //             }));
    //         })
    // } 

    /*useEffect Hook will run this function every time our page loads*/
    // useEffect(() => {
    //     getNotes();
    // }, [])
 
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
    
 
    const handleClick = () => {
        addDoc(dbInstance, {
            title: title,
            category: category,
            body: body,
            time: time,
            date: date
        })
        setTimeout(() => { 
            router.push('/');
        }, 500)
    }
    
    const event = [{ title, category, body, time, date }];
    const handleSubmit = (e) => {
        e.preventDefault();
        event = { title, category, body, time, date }; 
        console.log(event);
    }

  return (
    <div className={style.flexContainer} key="1">

        {/* we need to map this notesArray to see our data in the UI. */}
        {/* <div className={style.notesDisplay}>
                {notesArray.map((events) => {
                    return (
                        <div key={events.id} className={style.notesInner}>
                            <h4>{events.title}</h4> 
                            <h4>{events.body}</h4>
                            <h4>{events.category}</h4>
                        </div>
                    )
                })}
            </div> */}
            {/* <div><Event events = {notesArray}/></div> */}
            
        
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
          {Object.keys(titleErr).map((key)=>{
                return <div key={key} style={{color : "red"}}>{titleErr[key]}</div>
  
            })}   

            <select
                className={style.subject}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
            <option label="Välj kategori"></option>
            <option value="Konsert">Konsert</option>
            <option value="Quiz">Quiz</option>
            <option value="Mat & Dryck">Mat & Dryck</option>
            <option value="Kultur & Livsstil">Kultur & Livsstil</option>
            <option value="Guider">Guider</option>
            <option value="Sport & Fritid">Sport & Fritid</option>
            <option value="Konst & Hantverk">Konst & hantverk</option>
            <option value="Hälsa & Skönhet">Hälsa & Skönhet</option>
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
                <Event events= {event}/>
                <div className={style.buttonContainer}>
                                <button className={style.cancelBtn} onClick={() => setShowModal(false)}>Ändra</button>
                                <button className={style.submitBtn} onClick={handleClick} type="submit">Dela</button>
                            </div>
                </div>
            </div>

        ) : null }

    </div>

  );
};

export default Modals;