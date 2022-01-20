import styled, { css } from "styled-components";
import variables from "../scss/abstracts/_variables.module.scss";

export interface NewsContainerProps {
  readonly width?: string;
  readonly bgColor?: string;
}

export const NewsContainer = styled.div<NewsContainerProps>`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  min-width: 400px;
  padding: 40px 10px 10px 10px;
  width: ${(props) => props.width || "700px"};
  background-color: ${variables.whiteClr};
  color: ${variables.blackClr};
  border: 2px solid blue;
  /* display: grid;
  place-items: center; */
  ${(props) => {
    if (props.bgColor === "black") {
      return css`
        background-color: ${variables.blackClr};
        color: ${variables.whiteClr};
      `;
    } else if (props.bgColor === "orange") {
      return css`
        background-color: ${variables.orangeredClr};
        color: ${variables.whiteClr};
      `;
    } else {
      return;
    }
  }}

  .innerContainer {
    /* padding: 40px 10px 10px 10px; */
    /* height: 100; */

    & > div {
      position: relative;
      border: 2px solid blue;
      overflow: scroll;
      height: 85vh;
      z-index: 10;
    }
  }
`;
