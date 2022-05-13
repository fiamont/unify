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
        <ul onClick={toggleNav} className={style.navmenu}>
          <li  id="konsertquizuteliv"><Link href='/konsertquizuteliv' passHref ><div className={style.konsertquizuteliv}>Konsert, Quiz & Uteliv</div></Link></li>
          <li  id="matdryck"><Link href='/matdryck' passHref ><div className={style.matdryck}>Mat & Dryck</div></Link></li>
          <li  id="kulturlivsstil"><Link href='/kulturlivsstil' passHref ><div className={style.kulturlivsstil}>Kultur & Livsstil</div></Link></li>
          <li  id="sportfritid"><Link href='/sportfritid' passHref ><div className={style.sportfritid}>Sport & Fritid</div></Link></li>
          <li  id="konsthantverk"><Link href='/konsthantverk' passHref ><div className={style.konsthantverk}>Konst & Hantverk</div></Link></li>
          <li ><Link href='/profile' passHref ><div className={style.item}>Skapa profil</div></Link></li>
          <li ><Link href='/' passHref ><div className={style.item}>Kontakta oss</div></Link></li>
          <li ><Link href='/' passHref ><div className={style.item}>Om oss</div></Link></li>
        </ul> )}
      </nav>
  )

}