import styled, { css } from "styled-components";
import variables from "../scss/abstracts/_variables.module.scss";

export interface NewsContainerProps {
  readonly width?: string;
  readonly bgColor?: string;
  readonly last?: boolean;
  readonly num?: number;
}

export const NewsContainer = styled.div<NewsContainerProps>`
  height: 100%;
  min-width: 350px;
  padding: 95px 20px 10px 20px;
  width: ${(props) => props.width || "400px"};
  background-color: ${variables.whiteClr};
  color: ${variables.blackClr};
  overflow-x: hidden;
  overflow-y: scroll;
  border-right: 1px solid ${variables.blackClr};

  ${(props) => {
    if (props.bgColor === "black") {
      return css`
        background-color: ${variables.blackClr};
        color: ${variables.whiteClr};
      `;
    } else if (props.bgColor === "orange") {
      return css`
        background-color: ${variables.orangeredClr};
        color: ${variables.blackClr};
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

  .block {
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin-right: -20px;
      margin-left: -20px;

      ${(props) => {
        if (props.bgColor === "orange") {
          return css`
            background-color: ${variables.whiteClr};
          `;
        }
      }}

      .subheader {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 25px 20px 0px;
        padding-right: 20px;
        border-bottom: 1px solid ${variables.blackClr};
        margin-left: 20px;

        ${(props) => {
          if (props.bgColor === "black") {
            return css`
              border-bottom: 1px solid ${variables.whiteClr};
            `;
          }
        }}

        .category {
          text-transform: capitalize;
          font-weight: 700;
        }
      }
    }

    .author {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;

      .source {
        text-transform: capitalize;
        font-weight: 600;
      }
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
      position: relative;
      padding: 25px 0;
      margin: auto;
      margin-right: -20px;
      text-align: right;
      width: 90%;
      height: 60%;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        content-visibility: auto;
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

      .publish-time {
        & > div:last-child {
          text-transform: uppercase;
        }
      }
    }
  }
`;
