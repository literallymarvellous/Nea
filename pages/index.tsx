import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import NewsSectionContainer from "../components/NewsContainer";
import styles from "../styles/scss/pages/Home.module.scss";
// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import ASScroll from "@ashthornton/asscroll";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const locoscroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      horizontal: true,
    });

    const scroll = () => {
      locoscroll.enable();
    };
    window.addEventListener("load", scroll);

    return () => {
      window.removeEventListener("load", scroll);
    };
  }, []);
  return (
    <div ref={ref} className={`${styles.container} scroll-container`}>
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
