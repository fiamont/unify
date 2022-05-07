import Link from 'next/link'
import React from 'react'
import style from './../styles/LasmerButton.module.css'

function LasmerButton() {
  return (
    <div className={style.button}>
      <Link href="/" passHref><button className={style.lasmerbtn}>Läs mer...</button></Link>
    </div>
  )
}

export default LasmerButton