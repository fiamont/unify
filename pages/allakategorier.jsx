import Head from "next/head";
import styles from "../styles/Home.module.css";
import Event from "../components/Event";
import BackToTop from "../components/BackToTopButton";
import Image from "next/image";
import React from "react";
import { db } from "../utils/firebase";
import { useState, useEffect } from "react";
import axios from "axios";
import ChooseCity from "../components/ChooseCity";

export default function AllaKategorier({ postsInitial }) {
  let [posts, setPosts] = useState(postsInitial);
  let [chosenCity, setChosenCity] = useState("");
  useEffect(() => {
    axios
      .get("/api/posts", { params: { city: chosenCity } })
      .then(({ data }) => {
        setPosts(data);
      });
  }, [chosenCity]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Unify - Alla kategorier</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.titleDiv}>
          <h1 className={styles.rubrik2}>Alla kategorier</h1>
          <Image
            className={styles.cross}
            src="/allakategorierIcon.png"
            alt="allakategorierIcon"
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
export async function getServerSideProps() {
  const valdstad = "Stockholm";
  const snapshot = await db.collection("posts").get();

  const posts = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return {
    props: {
      postsInitial: JSON.parse(JSON.stringify(posts)),
    },
  };
}
