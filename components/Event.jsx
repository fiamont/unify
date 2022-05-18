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
        let showUpBtn = "";
        let eventImage = "";

        if(category == "Konsert, Quiz & Uteliv") {
            outerBorder= "#FCD46C";
            innerBorder = "#FFC130";
            categoryBox = "#FCD46C";
            showUpBtn = "#FFC130";
            eventImage = <img className={style.categoryImage} src="/konsertquizuteliv.svg"/>
        }
        else if(category == "Kultur & Livsstil"){
            outerBorder = "#7299E6";
            innerBorder = "#416AD2";
            categoryBox = "#7299E6";
            showUpBtn = "#416AD2";
            eventImage = <img className={style.categoryImage} src="/kulturlivstil.svg"/>
        }
        else if(category == "Sport & Fritid"){
            outerBorder = "#E67372";
            innerBorder = "#D24341";
            categoryBox = "#E67372";
            showUpBtn = "#D24341";
            eventImage = <img className={style.categoryImageSport} src="/sportfritid.svg"/>
        }
        else if(category == "Mat & Dryck"){
            outerBorder = "#E196BB";
            innerBorder = "#B36D8F";
            categoryBox = "#E196BB";
            showUpBtn = "#B36D8F";
            eventImage = <img className={style.categoryImage} src="/matdryck.svg"/>
        }
        else if(category == "Konst & Hantverk"){
            outerBorder = "#FFBD59";
            innerBorder = "#FF9211";
            categoryBox = "#FFBD59";
            showUpBtn = "#FF9211";
            eventImage = <img className={style.categoryImage} src="/konsthantverk.svg"/>
        }
        else{
            outerBorder = "#808080";
            innerBorder = "#636363";
            categoryBox = "#808080";
            showUpBtn = "#0b4341";
        }

        return {outerBorder, innerBorder, categoryBox, showUpBtn, eventImage};
        
    }
    return(
        
        <div className={style.container}>
            {events.map((events) =>(
                <div key={events.id} className={style.eventbox} style={{background: categoryColors(events.category).outerBorder}}>{/* outerBorder */}
                    <div className={style.innerBorder} style={{background: categoryColors(events.category).innerBorder}}> {/* innerBorder */}
                        <div className={style.eventimg}> {/* place for img (currently just gray box) */}
                            <div className={style.imgWrapper}>
                                {categoryColors(events.category).eventImage}
                            </div>
                            <div className={style.categoryBox} style={{background: categoryColors(events.category).categoryBox}}> {/* the small categoryBox */}
                                <p className={style.categoryText}>{events.category}</p>
                            </div>
                            <div className={style.event}> {/* white box with event text */}
                                <p className={style.title}>{events.eventName}</p>
                                <p className={style.description}>{events.date} kl {events.time} </p>
                                <p className={style.description}>{events.description}</p>
                               <ShowUpBtn color={categoryColors(events.category).showUpBtn}/>
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




