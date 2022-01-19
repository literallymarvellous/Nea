import styled from "styled-components";
import variables from "../scss/abstracts/_variables.module.scss";

export interface NewsContainerProps {
  readonly width?: string;
  readonly bgColor?: string;
}

export const NewsContainer = styled.div<NewsContainerProps>`
  height: 100%;
  min-width: 500px;
  width: ${(props) => props.width || "700px"};
  background-color: ${(props) => {
    if (props.bgColor === "black") {
      return variables.blackClr;
    } else if (props.bgColor === "orange") {
      return variables.orangeredClr;
    } else {
      return variables.whiteClr;
    }
  }};
`;
