import Head from "next/head";
import styles from "../styles/Home.module.css";
import Eventbutton from "../components/Eventbutton";
import Event from "../components/Event";
import BackToTop from "../components/BackToTopButton";
import { useState, useEffect } from "react";
import axios from "axios";
import ChooseCity from "../components/ChooseCity";
import React from "react";
import { db } from "../utils/firebase";

export default function HanderIdag({ postsInitial }) {
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
        <title>Unify - Händer idag</title>
      </Head>
      <Eventbutton />
      <main className={styles.main}>
        <h1 className={styles.rubrik}>Händer idag</h1>
        <BackToTop />
        <ChooseCity chosenCity={chosenCity} setChosenCity={setChosenCity} />
        <Event events={posts} />
      </main>
    </div>
  );
}

//Server side code
export async function getServerSideProps() {
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

  const snapshot = await db
    .collection("posts")
    .where("date", "==", today)
    .get();

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
