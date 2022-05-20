import React from "react";
import style from "./../styles/Footer.module.css"
import Link from 'next/link'


function Footer() {
    return (
        <div className={style.mainfooter}>
            <div className={style.text}>
            <Link href='/kontaktaoss' passHref >
              <div className={style.item}>Kontakta oss</div>
            </Link>
            <Link href='/omoss' passHref >
              <div className={style.item}>Om oss</div>
            </Link>
            </div>
            <p>Copyright &copy; 2022 Awesome Java21 & UX Design</p>
        </div>
    )
}

export default Footer;