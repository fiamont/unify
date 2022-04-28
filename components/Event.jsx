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

    function category (category) {

        let categoryClassName = "";

        if(category == "Uteliv" || category == "Konsert" || category == "Quiz") {
            categoryClassName = style.categoryUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            categoryClassName = style.categoryKulturLivstil;
        }
        else if(category == "Sport & Fritid" || category == "Guider"){
            categoryClassName = style.categorySportFritidGuider;
        }
        else if(category == "Mat & Dryck"){
            categoryClassName = style.categoryMatDryck;
        }
        else if(category == "Konst & Hantverk"){
            categoryClassName = style.categoryKonstHantverk;
        }else if(category == "Hälsa & Skönhet"){
            categoryClassName = style.categoryHalsaSkonhet;
        }
        else
        categoryClassName = style.categoryDefault;

        return categoryClassName;

    }

    return(
        
        <div className={style.container}>
            {listOfEvents.map((listOfEvents) =>(
                <div key={listOfEvents.title} className={outerBoarder(listOfEvents.category)}>
                    <div className={innerBoarder(listOfEvents.category)}>
                        <div className={style.eventimg}>
                            <div className={category(listOfEvents.category)}>
                                <p>{listOfEvents.category}</p>
                            </div>
                            <div className={style.event}>
                                <p className={style.title}>{listOfEvents.title}</p>
                                <p className={style.description}>{listOfEvents.body}</p>
                                
                            
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;



