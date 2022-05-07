import Link from 'next/link'
import React from 'react'
import style from './../styles/Hangmedbutton.module.css'

function Hangmedbutton() {
  return (
    <div className={style.button}>
      <Link href="/" passHref><button className={style.hangmedbtn}> + Häng med</button></Link>
    </div>
  )
}

export default Hangmedbutton