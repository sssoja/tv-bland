import { createGlobalStyle } from "styled-components";
import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
  }
  __next {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    text-decoration: none;
    color: ${theme.colors.black};
    line-height: 1.2em;
    font-family: ${theme.fonts.primary};
  }
  #root {
    height: 100%;
  }
  h1 {
    font-weight: ${theme.fontWeights.bold}
  }
  a {
    text-decoration: none;
    color: black;
  }
  li {
    list-style-type: none;
  }
  
`;
export default GlobalStyle;
