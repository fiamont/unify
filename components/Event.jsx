import React from 'react'
import listOfEvents from '../db/listOfEvents.json' 
import style from '../styles/Event.module.css'


function Event(){
 
    function outerBoarder (category) {

        let categoryClassName = "";

        if(category == "Uteliv" || category == "Konsert" || category == "Quiz") {
            categoryClassName = style.eventboxUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            categoryClassName = style.eventboxKulturLivstil;
        }
        else if(category == "Sport & Fritid" || category == "Guider"){
            categoryClassName = style.eventboxSportFritidGuider;
        }
        else if(category == "Mat & Dryck"){
            categoryClassName = style.eventboxMatDryck;
        }
        else if(category == "Konst & Hantverk"){
            categoryClassName = style.eventboxKonstHantverk;
        }else if(category == "Hälsa & Skönhet"){
            categoryClassName = style.eventboxHalsaSkonhet;
        }
        else
        categoryClassName = style.eventboxDefault;

        return categoryClassName;

    }

    function innerBoarder (category) {

        let categoryClassName = "";

        if(category == "Uteliv" || category == "Konsert" || category == "Quiz") {
            categoryClassName = style.innerBoarderUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            categoryClassName = style.innerBoarderKulturLivstil;
        }
        else if(category == "Sport & Fritid" || category == "Guider"){
            categoryClassName = style.innerBoarderSportFritidGuider;
        }
        else if(category == "Mat & Dryck"){
            categoryClassName = style.innerBoarderMatDryck;
        }
        else if(category == "Konst & Hantverk"){
            categoryClassName = style.innerBoarderKonstHantverk;
        }else if(category == "Hälsa & Skönhet"){
            categoryClassName = style.innerBoarderHalsaSkonhet;
        }
        else
        categoryClassName = style.innerBoarderDefault;

        return categoryClassName;

    }

    return(
        
        <div className={style.container}>
            {listOfEvents.map((listOfEvents) =>(
                <div key={listOfEvents.title} className={outerBoarder(listOfEvents.category)}>
                    <div className={innerBoarder(listOfEvents.category)}>
                        <div className={style.eventimg}>
                            <div className={style.event}>
                                <p>{listOfEvents.title}</p>
                                <p>{listOfEvents.body}</p>
                                <p>{listOfEvents.category}</p>
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;



