import Link from 'next/link'
import React from 'react'
import style from './../styles/Eventbutton.module.css'

function Eventbutton() {
  return (
    <div className='logo'>
      <Link href="/eventform"><button className={style.eventbtn}> Skapa event</button></Link>
    </div>
  )
}

export default Eventbutton
