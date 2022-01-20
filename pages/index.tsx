import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import NewsSectionContainer from "../components/NewsContainer";
import { useFetch } from "../hooks/useFetchData";
import styles from "../styles/scss/pages/Home.module.scss";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // const { data, isLoading, isError } = useFetch(
  //   `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_GNEWS_TOKEN}&locale=us`
  // );
  // console.log(process.env.NEXT_PUBLIC_GNEWS_TOKEN);
  // console.log(data);

  useEffect(() => {
    let asscroll: any;
    console.log(scrollRef.current);

    if (typeof window === "object" && scrollRef !== null) {
      const initAsscroll = async () => {
        const ASScroll = await import("@ashthornton/asscroll");
        asscroll = new ASScroll.default({
          //@ts-ignore
          containerElement: scrollRef.current,
          scrollElements: ".asscroll",
          ease: 0.075,
          customScrollbar: true,
          scrollbarEl: ".my-scrollbar",
          scrollbarHandleEl: ".my-scrollbar__handle",
          disableNativeScrollbar: true,
          scrollbarStyles: false,
          limitLerpRate: true,
          //@ts-ignore
          blockScrollClass: ".asscroll-block",
          touchScrollType: "scrollTop",
        });
        asscroll.enable({
          horizontalScroll: true,
        });
      };
      initAsscroll();
    }

    return () => asscroll.disable();
  }, []);

  return (
    <div>
      <Head>
        <title>Nea</title>
        <meta name="description" content="Your self curated news feed" />
      </Head>
      <div ref={scrollRef} className={`${styles.container}`}>
        <NewsSectionContainer section="For you" bgColor="black" width="400px" />
        {/* <NewsSectionContainer section="Headlines" bgColor="orange" />
        <NewsSectionContainer section="Sports" width="700px" />
        <NewsSectionContainer
          section="politics"
          bgColor="black"
          width="800px"
        /> */}
      </div>
    </div>
  );
};

export default Home;
