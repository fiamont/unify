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
            <Link href='/nojeuteliv' passHref >
              <div className={style.category} style={{background: CategorySelector("Nöje & Uteliv").darkColor}}> 
                <a><NojeUtelivIcon/></a>
              </div>
            </Link>
            <Link href='/sportfritid' passHref >
              <div className={style.category} style={{background: CategorySelector("Sport & Fritid").darkColor}}>
                  <a> <SportFritidIcon/> </a>
              </div>
            </Link>
            <Link href='/matdryck' passHref >
              <div className={style.category} style={{background: CategorySelector("Mat & Dryck").darkColor}}>
                  <a> <MatDryckIcon/> </a>
              </div>
            </Link>
            <Link href='/kulturlivsstil' passHref >
              <div className={style.category} style={{background: CategorySelector("Kultur & Livsstil").darkColor}}>
                  <a> <KulturLivsstilIcon/> </a>
              </div>
            </Link>
            <Link href='/hantverkkonst' passHref >
              <div className={style.category} style={{background: CategorySelector("Hantverk & Konst").darkColor}}>
                  <a> <KonstHantverkIcon/> </a>
              </div>
            </Link>
            <Link href='/allakategorier' passHref >
            <div className={style.category} style={{background: CategorySelector("Alla kategorier").darkColor}}>
                <a> <AllaKategorier/> </a>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Categories