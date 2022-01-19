import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import NewsSectionContainer from "../components/NewsContainer";
import { useFetch } from "../hooks/useFetchData";
import styles from "../styles/scss/pages/Home.module.scss";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useFetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_GNEWS_TOKEN}&locale=us`
  );
  console.log(process.env.NEXT_PUBLIC_GNEWS_TOKEN);
  console.log(data);

  useEffect(() => {
    let asscroll: any;

    if (typeof window === "object" && scrollRef !== null) {
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
