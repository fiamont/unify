import React from "react";
import Link from "next/link";
import Arrow from "./Icons/arrow";
import style from "../styles/Home.module.css";

function BackToHomepage() {
  return (
    <div>
      <Link href="/" passHref>
        <button className={style.arrowBtn}>
          <Arrow />
        </button>
      </Link>
    </div>
  );
}

export default BackToHomepage;
