import Link from 'next/link';
import React from 'react'
import style from '../styles/Event.module.css'
import ShowUpBtn from './ShowUp';

const Event = ({events}) =>{
 
    // const events = props.events;

    function categoryColors (category) {

        let outerBorder = "";
        let innerBorder = "";
        let categoryBox = "";

        if(category == "Konsert, Quiz & Uteliv") {
            outerBorder= style.eventboxUtelivKonsertQuiz;
            innerBorder = style.innerBorderUtelivKonsertQuiz;
            categoryBox = style.categoryUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            outerBorder = style.eventboxKulturLivstil;
            innerBorder = style.innerBorderKulturLivstil;
            categoryBox = style.categoryKulturLivstil;
        }
        else if(category == "Sport & Fritid"){
            outerBorder = style.eventboxSportFritid;
            innerBorder = style.innerBorderSportFritid;
            categoryBox = style.categorySportFritid;
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
                <div key={events.id} className={categoryColors(events.category).outerBorder}>{/* outerBorder */}
                    <div className={categoryColors(events.category).innerBorder}> {/* innerBorder */}
                        <div className={style.eventimg}> {/* place for img (currently just gray box) */}
                            <div className={categoryColors(events.category).categoryBox}> {/* the small categoryBox */}
                                <p className={style.categoryText}>{events.category}</p>
                            </div>
                            <div className={style.event}> {/* white box with event text */}
                                <p className={style.title}>{events.eventName}</p>
                                <p className={style.description}>{events.date} kl {events.time} </p>
                                <p className={style.description}>{events.description}</p>
                               <ShowUpBtn />
                               <Link href={`/posts/${events.id}`}>
                                <a className={style.readmore}>Läs mer...</a>
                                </Link>
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;



