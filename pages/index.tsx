import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NewsSectionContainer from "../components/NewsContainer";
import styles from "../styles/scss/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nea</title>
        <meta name="description" content="Your self curated news feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewsSectionContainer section="For you" bgColor="black" width="1000px" />
      <NewsSectionContainer section="Headlines" bgColor="orange" />
      <NewsSectionContainer section="Sports" width="1028px" />
      <NewsSectionContainer section="politics" width="800px" />
      <NewsSectionContainer section="movies" />
      <NewsSectionContainer section="health" width="1000px" />
    </div>
  );
};

export default Home;
