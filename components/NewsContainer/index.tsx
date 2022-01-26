import React, { MouseEventHandler, RefObject, useRef } from "react";
import { useFetch } from "../../hooks/useFetchData";
import { NewsDataProps } from "../../pages";
import { NewsContainer } from "../../styles/styled-components/newsContainer.styles";
import { NewsContainerProps } from "../../styles/styled-components/newsContainer.styles";
import InnerContainer from "./InnerContainer";

interface NewsSectionContainerProps extends NewsContainerProps {
  section: string;
  // data: NewsDataProps[] | undefined;
}

const NewsSectionContainer = ({
  bgColor,
  section,
  width,
  last,
}: NewsSectionContainerProps) => {
  const { data, isLoading } = useFetch<NewsDataProps[]>(
    `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_THENEWSAPI_TOKEN}&language=en&categories=${section}`
  );

  return (
    <>
      <NewsContainer
        className="asscroll"
        bgColor={bgColor}
        width={width}
        last={last}
      >
        <div id={section} className="asscroll-block block">
          <div className="header">
            <div className="subheader">
              <div className="category">{section}</div>
              <div>All</div>
            </div>
          </div>
          {data?.map((news, i) => (
            <InnerContainer key={i} data={news} />
          ))}
        </div>
      </NewsContainer>
    </>
  );
};

export default NewsSectionContainer;
