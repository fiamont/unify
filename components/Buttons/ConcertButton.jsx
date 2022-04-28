import Link from 'next/link'
import React from 'react'
import style from './../../styles/Button.module.css'
const ConcertButton = () => {
    return (
            <div className='concert'>
              <Link href="/profile" passHref><button className={style.joinbtn}>+ Häng med </button></Link>
            </div>
          )
      
    }

export default ConcertButton;
