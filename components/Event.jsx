import React from 'react'
import listOfEvents from '../db/listOfEvents.json' 
import style from '../styles/Event.module.css'


function Event(){
 
    function categoryColors (category) {

        let outerBorder = "";
        let innerBorder = "";
        let categoryBox = "";

        if(category == "Uteliv" || category == "Konsert" || category == "Quiz") {
            outerBorder= style.eventboxUtelivKonsertQuiz;
            innerBorder = style.innerBorderUtelivKonsertQuiz;
            categoryBox = style.categoryUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            outerBorder = style.eventboxKulturLivstil;
            innerBorder = style.innerBorderKulturLivstil;
            categoryBox = style.categoryKulturLivstil;
        }
        else if(category == "Sport & Fritid" || category == "Guider"){
            outerBorder = style.eventboxSportFritidGuider;
            innerBorder = style.innerBorderSportFritidGuider;
            categoryBox = style.categorySportFritidGuider;
        }
        else if(category == "Mat & Dryck"){
            outerBorder = style.eventboxMatDryck;
            innerBorder = style.innerBorderMatDryck;
            categoryBox = style.categoryMatDryck;
        }
        else if(category == "Konst & Hantverk"){
            outerBorder = style.eventboxKonstHantverk;
            innerBorder = style.innerBorderKonstHantverk;
            categoryBox = style.categoryKonstHantverk;
        }
        else if(category == "Hälsa & Skönhet"){
            outerBorder = style.eventboxHalsaSkonhet;
            innerBorder = style.innerBorderHalsaSkonhet;
            categoryBox = style.categoryHalsaSkonhet;
        }
        else{
            outerBorder = style.eventboxDefault;
            innerBorder = style.innerBorderDefault;
            categoryBox = style.categoryDefault;
        }
              
        return [outerBorder, innerBorder, categoryBox];

    }
    return(
        
        <div className={style.container}>
            {listOfEvents.map((listOfEvents) =>(
                <div key={listOfEvents.title} className={categoryColors(listOfEvents.category)[0]}>
                    <div className={categoryColors(listOfEvents.category)[1]}>
                        <div className={style.eventimg}>
                            <div className={categoryColors(listOfEvents.category)[2]}>
                                <p className={style.categoryText}>{listOfEvents.category}</p>
                            </div>
                            <div className={style.event}>
                                <p className={style.title}>{listOfEvents.title}</p>
                                <p className={style.description}>{listOfEvents.body}</p>
                                <p></p>
                               
                            
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;



