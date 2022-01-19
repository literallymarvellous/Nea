import ASScroll from "@ashthornton/asscroll";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef } from "react";
import NewsSectionContainer from "../components/NewsContainer";
import styles from "../styles/scss/pages/Home.module.scss";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let asscroll: any;

    if (typeof window === "object" && scrollRef !== null) {
      console.log(scrollRef.current);
      const initAsscroll = async () => {
        const ASScroll = await import("@ashthornton/asscroll");
        asscroll = new ASScroll.default({
          //@ts-ignore
          containerElement: scrollRef.current,
          scrollElements: scrollRef.current?.childNodes,

          customScrollbar: true,
          disableNativeScrollbar: true,
        });
        asscroll.enable({
          horizontalScroll: true,
        });
      };
      initAsscroll();
    }

    window.addEventListener("click", () => {
      console.log(asscroll.isHorizontal);
    });

    return () => asscroll.disable();
  }, []);

  return (
    <div>
      <div ref={scrollRef} className={`${styles.container}`}>
        <Head>
          <title>Nea</title>
          <meta name="description" content="Your self curated news feed" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NewsSectionContainer
          section="For you"
          bgColor="black"
          width="1000px"
        />
        <NewsSectionContainer section="Headlines" bgColor="orange" />
        <NewsSectionContainer section="Sports" width="1028px" />
        <NewsSectionContainer section="politics" width="800px" />
        <NewsSectionContainer section="movies" />
        <NewsSectionContainer section="health" bgColor="black" width="1000px" />
      </div>
      <div className="asscrollbar">
        <div className="asscrollbar__handle">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
