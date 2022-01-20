import React, { MouseEventHandler, RefObject } from "react";
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
  return (
    <>
      <NewsContainer
        className="asscroll"
        bgColor={bgColor}
        width={width}
        last={last}
      >
        <div className="asscroll-block block">
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