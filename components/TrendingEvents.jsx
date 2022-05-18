import React from 'react'
import style from '../styles/TrendingEvents.module.css'
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';


const Trending = ({events}) =>{

    function categoryColors (category) {

        let background = "";
        let eventImage = "";

        if(category == "Konsert, Quiz & Uteliv") {
            background= style.eventboxUtelivKonsertQuiz;
            eventImage = <Image className={style.categoryImage} src="/konsertquizuteliv.svg" alt='konsertquizuteliv' width="500" height="334"/>
        }
        else if(category == "Kultur & Livsstil"){
            background = style.eventboxKulturLivstil;
            eventImage = <Image className={style.categoryImage} src="/kulturlivstil.svg" alt='kulturlivstil' width="582" height="388"/>
        }
        else if(category == "Sport & Fritid"){
            background = style.eventboxSportFritid;
            eventImage = <Image className={style.categoryImage} src="/sport.svg" alt='sport' width="500" height="333"/>
        }
        else if(category == "Mat & Dryck"){
            background = style.eventboxMatDryck;
            eventImage = <Image className={style.categoryImage} src="/matdryck.svg" alt='matdryck' width="500" height="334"/>

        }
        else if(category == "Konst & Hantverk"){
            background = style.eventboxKonstHantverk;
            eventImage = <Image className={style.categoryImage} src="/konsthantverk.svg" alt='konsthantverk' width="500" height="333"/>

        }
        else{
            background = style.eventboxDefault;
        }
              
        return {background, eventImage};

    }
    return(
        
        <div className={style.container}>
            <p className={style.title}>POPULÄRT</p>
            <div className={style.events}>
                {events.map((events) =>(
                <div key={events.id} className={categoryColors(events.category).background}>
                    <div className={style.imgWraper}>{categoryColors(events.category).eventImage}</div>
                    <Link href={`/posts/${events.id}`}>
                        <a className={style.insidetitle}>{events.eventName}</a>
                    </Link>
                </div>
                ) )}
            </div>
        </div>
    )
}

export default Trending;