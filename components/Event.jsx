import React from 'react'
import style from '../styles/Event.module.css'
import ShowUpBtn from './ShowUp';

const Event = ({events}) =>{
 
    // const events = props.events;

    function categoryColors (category) {

        let outerBorder = "";
        let innerBorder = "";
        let categoryBox = "";
        let showUpBtn = '';

        if(category == "Konsert, Quiz & Uteliv") {
            outerBorder= style.eventboxUtelivKonsertQuiz;
            innerBorder = style.innerBorderUtelivKonsertQuiz;
            categoryBox = style.categoryUtelivKonsertQuiz;
            showUpBtn = '#FFC130';
        }
        else if(category == "Kultur & Livsstil"){
            outerBorder = style.eventboxKulturLivstil;
            innerBorder = style.innerBorderKulturLivstil;
            categoryBox = style.categoryKulturLivstil;
            showUpBtn = '#416AD2';
        }
        else if(category == "Sport & Fritid"){
            outerBorder = style.eventboxSportFritid;
            innerBorder = style.innerBorderSportFritid;
            categoryBox = style.categorySportFritid;
            showUpBtn = '#D24341';
        }
        else if(category == "Mat & Dryck"){
            outerBorder = style.eventboxMatDryck;
            innerBorder = style.innerBorderMatDryck;
            categoryBox = style.categoryMatDryck;
            showUpBtn = '#B36D8F';
        }
        else if(category == "Konst & Hantverk"){
            outerBorder = style.eventboxKonstHantverk;
            innerBorder = style.innerBorderKonstHantverk;
            categoryBox = style.categoryKonstHantverk;
            showUpBtn = '#FF9211';
        }
        else{
            outerBorder = style.eventboxDefault;
            innerBorder = style.innerBorderDefault;
            categoryBox = style.categoryDefault;
            showUpBtn = '#0b4341';
        }

        return {outerBorder, innerBorder, categoryBox, showUpBtn};
        
    }

    return(
        
        <div className={style.container}>
            {events.map((events) =>(
                <div key={events.id} className={categoryColors(events.category).outerBorder}>{/* outerBorder */}
                    <div className={categoryColors(events.category).innerBorder}> {/* innerBorder */}
                        <div className={style.eventimg}> {/* place for img (currently just gray box) */}
                            <div className={categoryColors(events.category).categoryBox}> {/* the small categoryBox */}
                                <p className={style.categoryText}>{events.category}</p>
                            </div>
                            <div className={style.event}> {/* white box with event text */}
                                <p className={style.title}>{events.title}</p>
                                <p className={style.description}>{events.date} kl {events.time} </p>
                                <p className={style.description}>{events.body}</p>
                               <ShowUpBtn color={categoryColors(events.category).showUpBtn}/>
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;



