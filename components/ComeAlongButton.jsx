import React from 'react'
import { useState } from 'react';
import style from './../styles/ComeAlongButton.module.css'


const ComeAlongButton = () => {
   
    const [state, setState] = useState(false);
    const [color, setColor] = useState("toggleBtn");

    const toggle=() => {
        setState(!state);
        setColor("cont2");
    }

    return (
        <div className={color}>
            <button 
                className={style.toggleBtn}
                onClick={toggle} >
                {state ? 'Häng med' : 'Kommer'}
            </button>
        </div>
    )
}
  
export default ComeAlongButton