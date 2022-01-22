import ASScroll from "@ashthornton/asscroll";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import NewsSectionContainer from "../components/NewsContainer";
import { fetcher, useFetch } from "../hooks/useFetchData";
import styles from "../styles/scss/pages/Home.module.scss";

export type NewsDataProps = {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string | Date;
  source: string | {};
  categories: string[];
  locale: string;
  relevance_score: number | null;
};

const Home: NextPage = ({
  fallbackData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log(fallbackData);

  const { data, isLoading, isError } = useFetch<NewsDataProps[]>(
    `https://gnews.io/api/v4/top-headlines?token=${process.env.NEXT_PUBLIC_GNEWS_TOKEN}&lang=en`
  );

  console.log(data);

  useEffect(() => {
    if (typeof window !== undefined && scrollRef.current !== null) {
      let asscroll: any;

      const resize = () => {
        // trigger other resize logic
        const width = window.innerWidth;
        const height = window.innerHeight;
        asscroll.resize({ width, height });
      };

      const initAsscroll = async () => {
        const ASScroll = await import("@ashthornton/asscroll");
        const asscroll = new ASScroll.default({
          //@ts-ignore
          containerElement: scrollRef.current,
          scrollElements: ".asscroll",
          ease: 0.07,
          customScrollbar: true,
          scrollbarEl: ".my-scrollbar",
          scrollbarHandleEl: ".my-scrollbar__handle",
          disableNativeScrollbar: true,
          scrollbarStyles: false,
          limitLerpRate: true,
          //@ts-ignore
          blockScrollClass: ".asscroll-block",
          touchScrollType: "scrollTop",
          disableRaf: true,
          disableResize: true,
        });

        asscroll.enable({
          horizontalScroll: true,
        });

        const onRaf = () => {
          asscroll.update();
          requestAnimationFrame(onRaf);
        };

        requestAnimationFrame(onRaf);
        window.addEventListener("resize", resize);

        asscroll.on("scroll", (scrollPos) => console.log(scrollPos));
      };

      initAsscroll();

      return () => {
        if (asscroll) {
          asscroll.disable();
        }
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Nea</title>
        <meta name="description" content="Your self curated news feed" />
      </Head>
      <div ref={scrollRef} className={`${styles.container}`}>
        <NewsSectionContainer
          data={data}
          section="For you"
          bgColor="black"
          width="400px"
        />
        <NewsSectionContainer
          data={data}
          section="Headlines"
          bgColor="orange"
        />
        <NewsSectionContainer data={data} section="Business" width="600px" />
        <NewsSectionContainer data={data} section="politics" width="500px" />
        <NewsSectionContainer data={data} section="politics" last />
      </div>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const data: NewsDataProps[] = await fetcher(
    `https://gnews.io/api/v4/top-headlines?token=${process.env.NEXT_PUBLIC_GNEWS_TOKEN}&lang=en`
  );

  // const res = await fetch(
  //   `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_GNEWS_TOKEN}&locale=us`
  // );
  // const result = await res.json();
  // const data: NewsDataProps = result.data;

  return {
    props: { fallbackData: data },
  };
};

export default Home;
