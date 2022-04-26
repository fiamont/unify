import React, {useState, useEffect} from 'react'
import style from './../styles/Navbar.module.css'
import Link from 'next/link'

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
        <button onClick={toggleNav} className={style.hamburger}>
          <span className={style.bar1}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
        {(toggleMenu || screenWidth > 960) && (
        <ul className={style.navmenu}>
          <li className={style.item}><Link href='/' passHref >Konsert</Link></li>
          <li className={style.item}><Link href='/' passHref >Quiz</Link></li>
          <li className={style.item}><Link href='/' passHref >Mat & Dryck</Link></li>
          <li className={style.item}><Link href='/' passHref >Uteliv</Link></li>
          <li className={style.item}><Link href='/' passHref >Kultur & Livsstil</Link></li>
          <li className={style.item}><Link href='/' passHref >Guider</Link></li>
          <li className={style.item}><Link href='/' passHref >Sport & Fritid</Link></li>
          <li className={style.item}><Link href='/' passHref >Konst & Hantverk</Link></li>
          <li className={style.item}><Link href='/' passHref >Hälsa & Skönhet</Link></li>
        </ul> )}
      </nav>
  )

}