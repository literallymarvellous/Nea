import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import NewsSectionContainer from "../components/NewsContainer";
import { useRefContext } from "../context/state";
import { useFetch } from "../hooks/useFetchData";
import { useScroll } from "../hooks/useScroll";
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
  source: string;
  categories: string[];
  locale: string;
  relevance_score: number | null;
};

const Home: NextPage = () => {
  const { sections } = useRefContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useScroll(scrollRef);

  // home is slice out while rendering so subtract 2 rather than 1
  const lastIndex = sections && sections.length - 1;

  return (
    <div>
      <Head>
        <title>Nea</title>
        <meta name="description" content="Your self curated news feed" />
      </Head>
      <div ref={scrollRef} className={`${styles.container}`}>
        {sections.map((section, i) => {
          if (i === 0) {
            return (
              <NewsSectionContainer
                key={i}
                section={section}
                bgColor="black"
                width="350px"
              />
            );
          } else if (i === 1) {
            return (
              <NewsSectionContainer
                key={i}
                section={section}
                bgColor="orange"
                width="350px"
              />
            );
          } else if (i === 2) {
            return (
              <NewsSectionContainer
                key={i}
                section={section}
                width="700px"
                num={i}
              />
            );
          } else if (i === lastIndex) {
            return (
              <NewsSectionContainer
                key={i}
                section={section}
                bgColor="black"
                width="600px"
              />
            );
          }

          return <NewsSectionContainer key={i} section={section} />;
        })}
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data: NewsDataProps[] = await fetcherNewsapi(newsapiurl);

//   return {
//     props: { fallbackData: data },
//   };
// };

export default Home;
