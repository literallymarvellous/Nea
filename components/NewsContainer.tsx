import React, { MouseEventHandler, RefObject } from "react";
import { NewsContainer } from "../styles/styled-components/newsContainer.styles";
import { NewsContainerProps } from "../styles/styled-components/newsContainer.styles";

interface NewsSectionContainerProps extends NewsContainerProps {
  section: string;
}

const NewsSectionContainer = ({
  bgColor,
  section,
  width,
}: NewsSectionContainerProps) => {
  const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };
  return (
    <>
      <NewsContainer className="asscroll" bgColor={bgColor} width={width}>
        <div className="innerContainer">
          <div>
            <div className="category">For you</div>
            <div>All</div>
          </div>
          <div className="asscroll-block">
            <div>
              <div className="source"></div>
              <div className="icons"></div>
            </div>
          </div>
        </div>
      </NewsContainer>
    </>
  );
};

export default NewsSectionContainer;
