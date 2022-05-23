import Head from "next/head";
import styles from "../styles/Home.module.css";
import Eventbutton from "../components/Eventbutton";
import Event from "../components/Event";
import BackToTop from "../components/BackToTopButton";
import ChooseCity from "../components/ChooseCity";
import { useState } from "react";

import React from "react";
import { db } from "../utils/firebase";

export default function HanderIdag({ postsInitial }) {
  const [posts, setPosts] = useState(postsInitial);
  const [chosenCity, setChosenCity] = useState("");

  // useEffect(() =>{
  //   axios.get()
  //   .then({data} => {
  //   setPosts(data)
  //   })

  //   }, [chosenCity])

  // console.log(chosenCity);

  return (
    <div className={styles.container}>
      <Head>
        <title>Unify - Alla kategorier</title>
      </Head>
      <Eventbutton />
      <main className={styles.main}>
        <h1 className={styles.rubrik}>Alla kategorier</h1>
        <ChooseCity chosenCity={chosenCity} setChosenCity={setChosenCity} />
        <BackToTop />
        {/* <Event
          events={
            !chosenCity || chosenCity == "Alla" || chosenCity == "Välj stad"
              ? posts
              : posts.filter((post) => post.city === chosenCity)
          } */}
        {/* /> */}
        <Event events={posts} />
      </main>
    </div>
  );
}

//Server side code
export async function getServerSideProps() {
  const valdstad = "Stockholm";
  const snapshot = await db
    .collection("posts")
    // .where('city', '==', valdstad)
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
