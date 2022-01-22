import React, { MouseEventHandler, RefObject, useRef } from "react";
import { NewsDataProps } from "../../pages";
import { NewsContainer } from "../../styles/styled-components/newsContainer.styles";
import { NewsContainerProps } from "../../styles/styled-components/newsContainer.styles";
import InnerContainer from "./InnerContainer";

interface NewsSectionContainerProps extends NewsContainerProps {
  section: string;
  data: NewsDataProps[] | undefined;
}

const NewsSectionContainer = ({
  bgColor,
  section,
  width,
  last,
  data,
}: NewsSectionContainerProps) => {
  const blockRef = useRef<HTMLDivElement>(null);

  let news = data && data[0];

  let interval: any;

  // const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  //   // interval = setTimeout(() => {
  //   //   blockRef.current?.classList.add("asscroll-block");
  //   // }, 500);
  //   blockRef.current?.classList.add("asscroll-block");
  // };

  // const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  //   clearInterval(interval);
  //   blockRef.current?.classList.remove("asscroll-block");
  // };
  return (
    <>
      <NewsContainer
        className="asscroll"
        bgColor={bgColor}
        width={width}
        last={last}
      >
        <div
          className="asscroll-block block"
          ref={blockRef}
          // onMouseEnter={mouseEnter}
          // onMouseLeave={mouseLeave}
        >
          <div className="header">
            <div className="category">For you</div>
            <div>All</div>
          </div>
          {data?.map((news) => (
            <InnerContainer key={news.uuid} data={news} />
          ))}
        </div>
      </NewsContainer>
    </>
  );
};

export default NewsSectionContainer;
