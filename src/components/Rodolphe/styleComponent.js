import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "HeaderImg"
    "Title"
    "StarContainer"
    "Section";
  width: 30em;
  border: solid 2px grey;
  border-radius: 10%;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const HeaderImg = styled.img`
  width: 30em;
  height: 20em;
  border-radius: 20%;
`;

export const Title = styled.h2`
  font-family: "Brush Script MT", cursive;
  display: flex;
  justify-content: center;
  padding-left: 10px;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  fill: #007eff;
  stroke: white;
  font-size: 3em;
  width: 10em;
`;

export const Input = styled.input`
  display: none;
`;

export const Rate = styled.p`
  font-size: 20px;
  padding-left: 10px;
`;

export const Section = styled.p`
  font-family: "Brush Script MT", cursive;
  display: ${(props) => props.theme.flex};
  flex-direction: ${(props) => props.theme.row};
  justify-content: ${(props) => props.theme.justify};
  width: 25em;
  font-size: 18px;
  padding-left: 10px;
`;

export const Section2 = styled.p`
  font-family: "Brush Script MT", cursive;
  display: ${(props) => props.theme.flex};
  flex-direction: ${(props) => props.theme.column};
  align-items: ${(props) => props.theme.justify};
  width: 25em;
  font-size: 18px;
  padding-left: 10px;
`;

export const GreyLine = styled.hr`
  width: 80%;
  color: black;
`;

export const Button1 = styled.button`
  position: relative;
  margin-right: 10px;
  padding: 5px 12px;
  height: 60px;
  width: 9em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  /*Injection css with prop border*/
  border: 2px solid ${(props) => props.theme.color1};
  border-radius: 10px;
  /*Injection css with prop color*/
  color: ${(props) => props.theme.color1};
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  @keyframes storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }
    &:before,
    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #1d89ff;
      content: "";
      opacity: 0;
      transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
      z-index: -1;
      transform: translate(100%, -25%) translate3d(0, 0, 0);
    }
    &:hover {
      &:before,
      &:after {
        opacity: 0.15;
        transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
          opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
      }
      &:before {
        transform: translate3d(50%, 0, 0) scale(0.9);
      }
      &:after {
        transform: translate(50%, 0) scale(1.1);
      }
    }
  }
`;

export const Button2 = styled.button`

  position: relative;
  margin-right: 10px;
  padding: 5px 12px;
  height: 60px;
  width: 9em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.color2};
  border-radius: 10px;
  color: ${(props) => props.theme.color2};
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  border: 1px solid;
  overflow: hidden;
  &:after {
    background: #38ef7d;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}
`;

export const theme = {
  color1: "darkOrange",
  color2: "lightBlue",
  flex: "flex",
  row: "row",
  justify: "center",
  column: "column"
};
