import React from 'react'
import style from '../styles/ContactUs.module.css'
import Image from 'next/Image'

function ContactUs() {
  return (
    <div >
        <div className={style.kontaktaOssDiv}>
            <h1 className={style.kontaktaOssRubrik}>KONTAKTA OSS</h1>
            <p className={style.text}>Vill du komma i kontakt med oss, ge oss feedback, förslag eller annat dylikt så tveka inte!</p>
            <p className={style.text2}>Våra bemannade tider är</p>
            <p className={style.text2}>Mån-Fre 10:00-16:00</p>
            <p className={style.text3}>Kontakta oss</p>
            <p className={style.email}> <Image src="/emailIcon.png" alt='emailIcon' width={23} height={24}/> unifywith@unify.se</p>
            <p className={style.phone}> <Image src="/phoneIcon.png" alt='phoneIcon' width={23} height={24}/> 070-010 20 03</p>
        </div>
        <div className={style.iconDiv}>
            <Image src="/instagramIcon.png" alt='instagramIcon' width={36} height={36}/>
            <Image src="/twitterIcon.png" alt='twitterIcon' width={37} height={36}/>
            <Image src="/linkedinIcon.png" alt='linkedinIcon' width={37} height={36}/>
        </div>
      
    </div>
  )
}

export default ContactUs
