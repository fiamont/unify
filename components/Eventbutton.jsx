import Link from 'next/link'
import React from 'react'
import style from './../styles/Eventbutton.module.css'

function Eventbutton() {
  return (
    <div className={style.button}>
      <Link href="/eventform" passHref><button className={style.eventbtn}> Skapa event</button></Link>
    </div>
  )
}

export default Eventbutton
