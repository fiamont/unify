import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Event from "../../components/Event";
import BackToTop from "../../components/BackToTopButton";
import Image from "next/image";

import React from "react";
import { db } from "../../utils/firebase";
import Eventbutton from "../../components/Eventbutton";
import { useState, useEffect } from "react";
import axios from "axios";
import ChooseCity from "../../components/ChooseCity";

export default function KonstHantverk({
  postsInitial,
  categoryTitle,
  imagePath,
  imageAlt,
}) {
  let [posts, setPosts] = useState(postsInitial);
  let [chosenCity, setChosenCity] = useState("");
  useEffect(() => {
    axios
      .get("/api/posts", {
        params: { city: chosenCity, category: categoryTitle },
      })
      .then(({ data }) => {
        setPosts(data);
      });
  }, [chosenCity]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Unify - {categoryTitle}</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.eventBtn}>
          <Eventbutton />
        </div>
        <div className={styles.titleDiv}>
          <h1 className={styles.rubrik2}>{categoryTitle}</h1>
          <Image
            className={styles.cross}
            src={imagePath}
            alt={imageAlt}
            width={30}
            height={30}
          />
        </div>
        <BackToTop />
        <ChooseCity chosenCity={chosenCity} setChosenCity={setChosenCity} />
        <Event events={posts} />
      </main>
    </div>
  );
}

//Server side code
export async function getServerSideProps(context) {
  let { category } = context.params;
  let imagePath = "";
  let imageAlt = "";

  if (category == "noje-uteliv") {
    category = "Nöje & Uteliv";
    imagePath = "/nojeutelivIcon.png";
    imageAlt = "nojeutelivIcon";
  } else if (category == "sport-fritid") {
    category = "Sport & Fritid";
    imagePath = "/sportfritidIcon.png";
    imageAlt = "sportfritidIcon";
  } else if (category == "mat-dryck") {
    category = "Mat & Dryck";
    imagePath = "/matdryckIcon.png";
    imageAlt = "matdryckIcon";
  } else if (category == "kultur-livsstil") {
    category = "Kultur & Livsstil";
    imagePath = "/kulturlivsstilIcon.png";
    imageAlt = "kulturlivsstilIcon";
  } else if (category == "hantverk-konst") {
    category = "Hantverk & Konst";
    imagePath = "/hantverkkonstIcon.png";
    imageAlt = "hantverkkonstIcon";
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  let today = "";
  if (currentMonth < 10) {
    today =
      currentDate.getFullYear() +
      "-0" +
      currentMonth +
      "-" +
      currentDate.getDate();
  } else {
    today =
      currentDate.getFullYear() +
      "-" +
      currentMonth +
      "-" +
      currentDate.getDate();
  }

  const snapshots = await db
    .collection("posts")
    .where("category", "==", category)
    .orderBy("date")
    .where("date", ">=", today)
    .get();

  const posts = snapshots.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return {
    props: {
      postsInitial: JSON.parse(JSON.stringify(posts)),
      categoryTitle: category,
      imagePath: imagePath,
      imageAlt: imageAlt,
    },
  };
}
