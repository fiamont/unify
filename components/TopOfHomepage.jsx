import React from 'react'
import HanderIdagButton from './HanderIdagButton'
import style from '../styles/TopOfHomepage.module.css'
import Image from 'next/image'
import HomepageImg from '../public/homepageImg.svg'

function TopOfHomepage({events}) {
  return (
    <div className={style.container}>
      <div className={style.textPart}>
        <h1 className={style.nummer}>{events.length}</h1>
        <h1 className={style.title}>Aktiviteter<br></br>igång just nu</h1>
        <div className={style.button}>
        <HanderIdagButton/>
        </div>
      </div> 
      <div className={style.greySquare}>
          <div className={style.homepageImg}>
              <Image src={HomepageImg} alt='homepageImg'/>
          </div>
      </div>
    </div>
  )
}

export default TopOfHomepage
