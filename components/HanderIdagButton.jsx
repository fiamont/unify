import Link from 'next/link'
import React from 'react'
import style from './../styles/HanderIdagButton.module.css'

function HanderIdagButton() {
  return (
    <div className={style.button}>
      <Link href="/handeridag" passHref><button className={style.handeridagbtn}> Händer idag</button></Link>
    </div>
  )
}

export default HanderIdagButton