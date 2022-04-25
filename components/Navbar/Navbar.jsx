import React, {useState, useEffect} from 'react'
import './Navbar.css'

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
      <ul className="list">
      <li className="items">Konsert</li>
      <li className="items">Quiz</li>
      <li className="items">Mat & Dryck</li>
      <li className="items">Uteliv</li>
      <li className="items">Kultur & Livsstil</li>
      <li className="items">Guider</li>
      <li className="items">Sport & Fritid</li>
      <li className="items">Konst & Hantverk</li>
      <li className="items">Hälsa & Skönhet</li>
    </ul>
      )}
      
      <button onClick={toggleNav} className="btn"><span className="bar" id="bar1"></span>
              <span className="bar"></span>
              <span className="bar"></span></button>
    </nav>
  )
}