import React from 'react'
import style from '../styles/TrendingEvents.module.css'
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import CategorySelector from './CategorySelector';


const Trending = ({events}) =>{

    return(
        
        <div className={style.container}>
            <p className={style.title}>POPULÄRT</p>
            <div className={style.events}>
                {events.map((events) =>(
                <div key={events.id} className={style.background} style={{background: CategorySelector(events.category).outerBorder}}>
                    <div className={style.imgWraper}>
                        <Image src={CategorySelector(events.category).eventImage} alt='eventbild' width="500" height="333"/>
                    </div>
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