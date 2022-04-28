import React from 'react'
import listOfEvents from '../db/listOfEvents.json' 
import style from '../styles/Event.module.css'


function Event(){
    
   
    return(
        
        <div>
            {listOfEvents.map((listOfEvents) =>(
                <div key={listOfEvents.title} className={style.eventbox}>
                    <div className={style.borderbox}>
                        <div className={style.eventimg}>
                            <div className={style.event}>
                                <p>{listOfEvents.title}</p>
                                <p>{listOfEvents.body}</p>
                                <p>{listOfEvents.category}</p>
                            </div>
                        </div>
                     </div>
                </div>

            ) )}
           
           

        </div>
    )
}

export default Event;



