import styled, { css } from "styled-components";
import variables from "../scss/abstracts/_variables.module.scss";

export interface NewsContainerProps {
  readonly width?: string;
  readonly bgColor?: string;
  readonly last?: boolean;
}

export const NewsContainer = styled.div<NewsContainerProps>`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  padding: 90px 20px 10px 20px;
  width: ${(props) => props.width || "350px"};
  background-color: ${variables.whiteClr};
  color: ${variables.blackClr};
  overflow: scroll;
  border-right: 1px solid ${variables.blackClr};
  z-index: 10;

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

  ${(props) => {
    if (props.last === true) {
      return css`
        background-color: ${variables.blackClr};
        color: ${variables.orangeredClr};
        width: 700px;
      `;
    }
  }}

  & > div {
    position: relative;
    inset: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
    /* visibility: hidden; */
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 15px 0;
    margin-right: -20px;
    border-bottom: 1px solid ${variables.blackClr};
    z-index: 100;

    ${(props) => {
      if (props.bgColor === "black") {
        return css`
          border-bottom: 1px solid ${variables.whiteClr};
        `;
      }
    }}
  }

  .author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }

  .title {
    width: fit-content;
    max-width: 300px;
    padding: 0px 0 25px;
    font-family: $montserrat;
    font-size: 2.2rem;
    font-weight: 900;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: left;
  }

  .image {
    padding: 25px 0;
    margin-right: -20px;
    text-align: right;

    img {
      object-fit: cover;
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px 40px 0;
    margin-right: -20px;
    border-bottom: 5px solid ${variables.blackClr};

    ${(props) => {
      if (props.bgColor === "black") {
        return css`
          border-bottom: 1px solid ${variables.whiteClr};
        `;
      }
    }}

    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;
