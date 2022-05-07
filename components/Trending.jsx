import React from 'react'
import style from '../styles/Trending.module.css'


const Trending = ({events}) =>{

    function categoryColors (category) {

        let outerBorder = "";

        if(category == "Uteliv" || category == "Konsert" || category == "Quiz") {
            outerBorder= style.eventboxUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            outerBorder = style.eventboxKulturLivstil;
        }
        else if(category == "Sport & Fritid" || category == "Guider"){
            outerBorder = style.eventboxSportFritidGuider;
        }
        else if(category == "Mat & Dryck"){
            outerBorder = style.eventboxMatDryck;

        }
        else if(category == "Konst & Hantverk"){
            outerBorder = style.eventboxKonstHantverk;

        }
        else if(category == "Hälsa & Skönhet"){
            outerBorder = style.eventboxHalsaSkonhet;
        }
        else{
            outerBorder = style.eventboxDefault;
        }
              
        return {outerBorder};

    }
    return(
        
        <div className={style.container}>
            <p className={style.title}>Trending</p>
            <div className={style.events}>
                {events.map((events) =>(
                    <div key={events.title} className={categoryColors(events.category).outerBorder}>{/* outerBorder */}
                        <p className={style.title}>{events.title}</p>
                            {/* klicka sig till eventet här, som att klicka på "läs mer..."?*/}
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Trending;



