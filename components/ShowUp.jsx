import React from 'react'
import { useState } from 'react';
import style from './../styles/ShowUpBtn.module.css'


const ShowUpBtn = () => {
   
    const [state, setState] = useState(false);
    const [colors, setColors] = useState("#157C79")

    const toggle=() => {
        setState(!state);
        setColors(!state ? "#B36D8F" : '#157C79')
    }

    return (
        <button 
            style={{ backgroundColor: colors}}
            onClick={toggle}
            className={style.toggleBtn} 
            /* className={style.toggleBtn + (state ? style.toggleClose : '')} */
            >
            {state ? 'Kommer' : 'Häng med'}
        </button>
    )
}
  
export default ShowUpBtn