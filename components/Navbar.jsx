import React, {useState, useEffect} from 'react'
import style from './../styles/Navbar.module.css'

export default function Navbar() { 
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

 

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
    <nav>
      {(toggleMenu || screenWidth > 960) && (
      <ul className={style.list}>
      <li className={style.item}>Konsert</li>
      <li className={style.item}>Quiz</li>
      <li className={style.item}>Mat & Dryck</li>
      <li className={style.item}>Uteliv</li>
      <li className={style.item}>Kultur & Livsstil</li>
      <li className={style.item}>Guider</li>
      <li className={style.item}>Sport & Fritid</li>
      <li className={style.item}>Konst & Hantverk</li>
      <li className={style.item}>Hälsa & Skönhet</li>
    </ul>
      )}
      
      <button onClick={toggleNav} className={style.btn}><span className={style.bar} id="bar1"></span>
              <span className={style.bar}></span>
              <span className={style.bar}></span></button>
    </nav>
  )

}