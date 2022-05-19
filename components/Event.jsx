import Link from 'next/link';
import React from 'react'
import style from '../styles/Event.module.css'
import ShowUpBtn from './ShowUp';
import Image from 'next/dist/client/image';
import CategorySelector from './CategorySelector';


const Event = ({events}) =>{
    return(
        
        <div className={style.container}>
            {events.map((events) =>(
                <div key={events.id} className={style.eventbox} style={{background: CategorySelector(events.category).lightColor}}>{/* outerBorder */}
                    <div className={style.innerBorder} style={{background: CategorySelector(events.category).darkColor}}> {/* innerBorder */}
                        <div className={style.eventimg}> {/* place for img (currently just gray box) */}
                            <div className={style.imgWrapper}>
                                <Image src={CategorySelector(events.category).eventImage} alt='eventbild' width="500" height="333"/>
                                {/* {categoryColors(events.category).eventImage} */}
                            </div>
                            <div className={style.categoryBox} style={{background: CategorySelector(events.category).categoryBox}}> {/* the small categoryBox */}
                                <p className={style.categoryText}>{events.category}</p>
                            </div>
                            <div className={style.event}> {/* white box with event text */}
                                <p className={style.title}>{events.eventName}</p>
                                <p className={style.description}>{events.date} kl {events.time} </p>
                                <p className={style.description}>{events.description}</p>
                               <ShowUpBtn color={CategorySelector(events.category).showUpBtn}/>
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




