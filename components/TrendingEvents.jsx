import React from 'react'
import style from '../styles/TrendingEvents.module.css'
import Link from 'next/dist/client/link';


const Trending = ({events}) =>{

    function categoryColors (category) {

        let background = "";

        if(category == "Konsert, Quiz & Uteliv") {
            background= style.eventboxUtelivKonsertQuiz;
        }
        else if(category == "Kultur & Livsstil"){
            background = style.eventboxKulturLivstil;
        }
        else if(category == "Sport & Fritid"){
            background = style.eventboxSportFritid;
        }
        else if(category == "Mat & Dryck"){
            background = style.eventboxMatDryck;

        }
        else if(category == "Konst & Hantverk"){
            background = style.eventboxKonstHantverk;

        }
        else{
            background = style.eventboxDefault;
        }
              
        return {background};

    }
    return(
        
        <div className={style.container}>
            <p className={style.title}>Trending</p>
            <div className={style.events}>
                {events.map((events) =>(
                <div key={events.id} className={categoryColors(events.category).background}>{/* outerBorder */}
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