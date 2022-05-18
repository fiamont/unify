import React from 'react'
import Link from 'next/link'
import style from './../styles/Categories.module.css'
import NojeUtelivIcon from './Icons/NojeUtelivIcon'
import AllaKategorier from './Icons/AllaKategorierIcon'
import SportFritidIcon from './Icons/SportFritidIcon'
import MatDryckIcon from './Icons/MatDryckIcon'
import KonstHantverkIcon from './Icons/KonstHantverkIcon'
import KulturLivsstilIcon from './Icons/KulturLivsstilIcon'


function Categories() {
  return (
    <div className={style.categoriesbox}>
        <p className={style.title}>KATEGORIER</p>
        <div className={style.gridBox}>
            <div className={style.konsertquizuteliv} id="konsertquizuteliv">
              <Link href='/konsertquizuteliv' passHref > 
                <a><NojeUtelivIcon/></a>
              </Link>
            </div>
            <div className={style.sportfritid} id="sportfritid">
              <Link href='/sportfritid' passHref >
                <a> <SportFritidIcon/> </a>
              </Link>
            </div>
            <div className={style.matdryck} id="matdryck">
              <Link href='/matdryck' passHref >
                <a> <MatDryckIcon/> </a>
              </Link>
            </div>
            <div className={style.kulturlivsstil} id="kulturlivsstil">
              <Link href='/kulturlivsstil' passHref >
                <a> <KulturLivsstilIcon/> </a>
              </Link>
            </div>
            <div className={style.konsthantverk} id="konsthantverk">
              <Link href='/konsthantverk' passHref >
                <a> <KonstHantverkIcon/> </a>
              </Link>
            </div>
            <div className={style.allakategorier} id="allaKategorier">
              <Link href='/allakategorier' passHref >
                <a> <AllaKategorier/> </a>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories