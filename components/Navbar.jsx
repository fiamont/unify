import React, {useState, useEffect} from 'react'
import style from './../styles/Navbar.module.css'
import Link from 'next/link'
import SearchIcon from "./Icons/searchIcon"
import ProfileIcon from "./Icons/profileIcon"


export default function Navbar() { 
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState()
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
      <nav className={style.navbar}>
        <div className={style.buttons}>
        <button onClick={toggleNav} className={style.hamburger}>
          <span className={style.bar1}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
        <div className={style.icons}>
                <SearchIcon/>
                <ProfileIcon/>
            </div>
        </div>
        <hr className={style.hr}></hr>
        {(toggleMenu || screenWidth > 960) && (
        <ul className={style.navmenu}>
          <li className={style.konsertquizuteliv} id="konsertquizuteliv"><Link href='/konsertquizuteliv' passHref >Konsert, Quiz & Uteliv</Link></li>
          <li className={style.matdryck} id="matdryck"><Link href='/matdryck' passHref >Mat & Dryck</Link></li>
          <li className={style.kulturlivsstil} id="kulturlivsstil"><Link href='/kulturlivsstil' passHref >Kultur & Livsstil</Link></li>
          <li className={style.sportfritid} id="sportfritid"><Link href='/sportfritid' passHref >Sport & Fritid</Link></li>
          <li className={style.konsthantverk} id="konsthantverk"><Link href='/konsthantverk' passHref >Konst & Hantverk</Link></li>
          <li className={style.item}><Link href='/profile' passHref >Skapa profil</Link></li>
          <li className={style.item}><Link href='/' passHref >Kontakta oss</Link></li>
          <li className={style.item}><Link href='/' passHref >Om oss</Link></li>
        </ul> )}
      </nav>
  )

}