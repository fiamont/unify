import Link from 'next/link';
import React from 'react'
import style from '../styles/Event.module.css'
import ShowUpBtn from './ShowUp';
import Image from 'next/dist/client/image';
import CategorySelector from './CategorySelector';
import ArrowRight from './Icons/ArrowRight'
import Watch from './Icons/Watch';
import Location from './Icons/Location';

const Event = ({events}) =>{
    return(
        
        <div className={style.container}>
            {events.map((events) =>(
                <div key={events.id} className={style.eventbox} style={{background: CategorySelector(events.category).lightColor}}>{/* outerBorder */}
                    <div className={style.innerBorder} style={{border:'13px solid ' + CategorySelector(events.category).darkColor}}> {/* innerBorder */}
                        <div className={style.imgWrapper}>
                            <Image src={CategorySelector(events.category).eventImage} alt='eventbild' width="500" height="333"/>
                        </div>
                        <div className={style.categoryBox} style={{background: CategorySelector(events.category).categoryBox}}> {/* the small categoryBox */}
                            <p className={style.categoryText}>{events.category}</p>
                        </div>
                        <div className={style.event}> {/* white box with event text */}
                            <p className={style.title}>{events.eventName}</p>
                            <div className={style.info}>
                                <Location/>
                                <p className={style.description}>{events.location}</p>
                            </div>
                            <div className={style.info}>
                                <Watch/>
                                <p className={style.description}>{events.date} Kl. {events.time} </p>
                            </div>
                            <div className={style.showUpBtnDiv}>
                            <ShowUpBtn color={CategorySelector(events.category).showUpBtn}/>
                            </div>
                            <Link href={`/posts/${events.id}`}>
                            <a className={style.readmoreBox} style={{background: CategorySelector(events.category).darkColor}}>
                                <div className={style.readmore}>
                                    Läs mer
                                </div>
                                <div className={style.ArrowRight}>
                                    <ArrowRight/>
                                </div>
                            </a>
                            </Link>
                        </div>
                     </div>
                </div>
            ) )}
        </div>
    )
}

export default Event;




