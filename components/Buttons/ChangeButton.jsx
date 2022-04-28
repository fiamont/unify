import Link from 'next/link'
import React from 'react'
import style from './../../styles/ChangeButton.module.css'
const ChangeButton = () => {
    return ( 
            <div className='button'>
            <Link href="/profile" passHref><button className={style.changebtn}><span className={style.change}>ÄNDRA</span></button></Link>
          </div>     
     );
}
 
export default ChangeButton;