import React from 'react'
import { useState } from 'react';
import style from './../styles/ShowUpBtn.module.css'
import Check from './Icons/Check'
import Plus from './Icons/Plus'



const ShowUpBtn = ({color}) => {
   
    const [state, setState] = useState(false);
    const [colors, setColors] = useState("#157C79")
    const [fontColors, setFontColors] = useState("#FFF")


    const toggle=() => {
        setState(!state);
        setColors(!state ? color : '#157C79')
        setFontColors(!state ? '#000' : '#FFF')

    }

    return (
        <button 
            style={{ backgroundColor: colors, color: fontColors}}
            onClick={toggle}
            className={style.toggleBtn} 
            /* className={style.toggleBtn + (state ? style.toggleClose : '')} */
            >
            {state ? <div className={style.btnText}><Check/> Hänger med</div> : <div className={style.btnText}><Plus/> Häng med</div>}
            
        </button>
    )
}
  
export default ShowUpBtn