import React from 'react'
import style from '../styles/Event.module.css'
import ShowUpBtn from './ShowUp';

const Event = ({events}) =>{
 
    // const events = props.events;

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
              
        return {outerBorder, innerBorder, categoryBox};

    }
    return(
        
        <div className={style.container}>
            {events.map((events) =>(
                <div key={events.title} className={categoryColors(events.category).outerBorder}>{/* outerBorder */}
                    <div className={categoryColors(events.category).innerBorder}> {/* innerBorder */}
                        <div className={style.eventimg}> {/* place for img (currently just gray box) */}
                            <div className={categoryColors(events.category).categoryBox}> {/* the small categoryBox */}
                                <p className={style.categoryText}>{events.category}</p>
                            </div>
                            <div className={style.event}> {/* white box with event text */}
                                <p className={style.title}>{events.title}</p>
                                <p className={style.description}>{events.date} kl {events.time} </p>
                                <p className={style.description}>{events.body}</p>
                               <ShowUpBtn />
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;



