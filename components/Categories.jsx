import React from 'react'
import Link from 'next/link'
import style from './../styles/Categories.module.css'

function Categories() {
  return (
    <div className={style.categoriesbox}>
        <p className={style.title}>Kategorier</p>
        <div className={style.gridBox}>
            <div className={style.konsertquizuteliv} id="konsertquizuteliv"><Link href='/konsertquizuteliv' passHref >Konsert, Quiz & Uteliv</Link></div>
            <div className={style.matdryck} id="matdryck"><Link href='/matdryck' passHref >Mat & Dryck</Link></div>
            <div className={style.kulturlivsstil} id="kulturlivsstil"><Link href='/kulturlivsstil' passHref >Kultur & Livsstil</Link></div>
            <div className={style.sportfritid} id="sportfritid"><Link href='/sportfritid' passHref >Sport & Fritid</Link></div>
            <div className={style.konsthantverk} id="konsthantverk"><Link href='/konsthantverk' passHref >Konst & Hantverk</Link></div>
            <div className={style.allakategorier} id="allaKategorier"><Link href='/allakategorier' passHref >Alla kategorier</Link></div>
        </div>
        
    </div>
  )
}

export default Categories