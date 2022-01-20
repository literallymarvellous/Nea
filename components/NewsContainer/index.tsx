import React, { MouseEventHandler, RefObject, useRef } from "react";
import { NewsContainer } from "../../styles/styled-components/newsContainer.styles";
import { NewsContainerProps } from "../../styles/styled-components/newsContainer.styles";
import InnerContainer from "./InnerContainer";

interface NewsSectionContainerProps extends NewsContainerProps {
  section: string;
}

const NewsSectionContainer = ({
  bgColor,
  section,
  width,
  last,
}: NewsSectionContainerProps) => {
  const blockRef = useRef<HTMLDivElement>(null);

  let interval: any;

  const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    interval = setTimeout(() => {
      blockRef.current?.classList.add("asscroll-block");
    }, 1000);
  };

  const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(interval);
    clearInterval(interval);
    blockRef.current?.classList.remove("asscroll-block");
  };
  return (
    <>
      <NewsContainer
        className="asscroll"
        bgColor={bgColor}
        width={width}
        last={last}
      >
        <div
          className="block"
          ref={blockRef}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div className="header">
            <div className="category">For you</div>
            <div>All</div>
          </div>
          <InnerContainer />
          <InnerContainer />
        </div>
      </NewsContainer>
    </>
  );
};

export default NewsSectionContainer;
