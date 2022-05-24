import React, { useState, useEffect } from "react";
import style from "./../styles/Navbar.module.css";
import Link from "next/link";
import ProfileIcon from "./Icons/profileIcon";
import ProfileIcon2 from "./Icons/ProfileIcon2";
import ContactIcon from "./Icons/ContactIcon";
import AboutIcon from "./Icons/AboutIcon";
import CategorySelector from "./CategorySelector";
import Eventbutton from "./Eventbutton";
import Image from "next/image";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    if (toggleMenu === true) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const toggleNav2 = () => {
    setToggleMenu(!toggleMenu);
    setShowModal(false);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav className={style.navbar}>
      <div className={style.buttons}>
        <button onClick={toggleNav} className={style.hamburger}>
          <span className={style.bar1}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
        <div className={style.icons}>
          <ProfileIcon />
          <div className={style.eventBtn}>
            <Eventbutton />
          </div>
        </div>
      </div>
      <hr className={style.hr}></hr>
      {(toggleMenu || screenWidth > 960) && (
        <ul onClick={toggleNav2} className={style.navmenu}>
          <li className={style.eventbutton}>
            <Eventbutton />
            <Image
              className={style.cross}
              onClick={toggleNav}
              src="/cross.png"
              alt="cross"
              width={25}
              height={24}
            />
          </li>
          <li id="konsertquizuteliv">
            <Link href={`/category/${"noje-uteliv"}`} passHref>
              <div
                className={style.item}
                style={{
                  background: CategorySelector("Nöje & Uteliv").darkColor,
                }}
              >
                Nöje & Uteliv
              </div>
            </Link>
          </li>
          <li id="sportfritid">
            <Link href={`/category/${"sport-fritid"}`} passHref>
              <div
                className={style.item}
                style={{
                  background: CategorySelector("Sport & Fritid").darkColor,
                }}
              >
                Sport & Fritid
              </div>
            </Link>
          </li>
          <li id="matdryck">
            <Link href={`/category/${"mat-dryck"}`} passHref>
              <div
                className={style.item}
                style={{
                  background: CategorySelector("Mat & Dryck").darkColor,
                }}
              >
                Mat & Dryck
              </div>
            </Link>
          </li>
          <li id="kulturlivsstil">
            <Link href={`/category/${"kultur-livsstil"}`} passHref>
              <div
                className={style.item}
                style={{
                  background: CategorySelector("Kultur & Livsstil").darkColor,
                }}
              >
                Kultur & Livsstil
              </div>
            </Link>
          </li>
          <li id="konsthantverk">
            <Link href={`/category/${"hantverk-konst"}`} passHref>
              <div
                className={style.item}
                style={{
                  background: CategorySelector("Hantverk & Konst").darkColor,
                }}
              >
                Hantverk & Konst
              </div>
            </Link>
          </li>
          <li id="allaKategorier">
            <Link href="/allakategorier" passHref>
              <div
                className={style.item}
                style={{
                  background: CategorySelector("Alla kategorier").darkColor,
                }}
              >
                Alla kategorier
              </div>
            </Link>
          </li>
          <li className={style.minaevent}>
            <Link href="/profile" passHref>
              <div className={style.item2}>
                {" "}
                <div className={style.hbIcon}>
                  <ProfileIcon2 />
                </div>
                Mina event
              </div>
            </Link>
          </li>
          <li>
            <Link href="/kontaktaoss" passHref>
              <div className={style.item2}>
                {" "}
                <div className={style.hbIcon}>
                  <ContactIcon />
                </div>
                Kontakta oss
              </div>
            </Link>
          </li>
          <li>
            <Link href="/omoss" passHref>
              <div className={style.item2}>
                <div className={style.hbIcon}>
                  <AboutIcon />
                </div>
                Om oss
              </div>
            </Link>
          </li>
        </ul>
      )}
      {showModal ? (
        <div className={style.showModal} onClick={toggleNav}></div>
      ) : null}
    </nav>
  );
}
