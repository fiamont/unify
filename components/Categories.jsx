import React from 'react'
import Link from 'next/link'
import style from './../styles/Categories.module.css'
import NojeUtelivIcon from './Icons/NojeUtelivIcon'
import AllaKategorier from './Icons/AllaKategorierIcon'
import SportFritidIcon from './Icons/SportFritidIcon'
import MatDryckIcon from './Icons/MatDryckIcon'
import KonstHantverkIcon from './Icons/KonstHantverkIcon'
import KulturLivsstilIcon from './Icons/KulturLivsstilIcon'
import CategorySelector from './CategorySelector'


function Categories() {
  return (
    <div className={style.categoriesbox}>
        <p className={style.title}>KATEGORIER</p>
        <div className={style.gridBox}>
            <div className={style.category} style={{background: CategorySelector("Konsert, Quiz & Uteliv").darkColor}}>
              <Link href='/konsertquizuteliv' passHref > 
                <a><NojeUtelivIcon/></a>
              </Link>
            </div>
            <div className={style.category} style={{background: CategorySelector("Sport & Fritid").darkColor}}>
              <Link href='/sportfritid' passHref >
                <a> <SportFritidIcon/> </a>
              </Link>
            </div>
            <div className={style.category} style={{background: CategorySelector("Mat & Dryck").darkColor}}>
              <Link href='/matdryck' passHref >
                <a> <MatDryckIcon/> </a>
              </Link>
            </div>
            <div className={style.category} style={{background: CategorySelector("Kultur & Livsstil").darkColor}}>
              <Link href='/kulturlivsstil' passHref >
                <a> <KulturLivsstilIcon/> </a>
              </Link>
            </div>
            <div className={style.category} style={{background: CategorySelector("Konst & Hantverk").darkColor}}>
              <Link href='/konsthantverk' passHref >
                <a> <KonstHantverkIcon/> </a>
              </Link>
            </div>
            <div className={style.category} style={{background: CategorySelector("Alla kategorier").darkColor}}>
              <Link href='/allakategorier' passHref >
                <a> <AllaKategorier/> </a>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories