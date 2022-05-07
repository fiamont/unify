import React from 'react'
import style from './../styles/KommandeEvent.module.css'

const KommandeEvent = ({ children }) => {
    return (
      <div>
          <p className={style.title}>KommandeEvent</p>
          { children }
      </div>
    )
  }

export default KommandeEvent