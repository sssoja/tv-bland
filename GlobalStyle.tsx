import { createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
import { fontWeights } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: NunitoBold;
  src: url(/Nunito-ExtraBold.ttf)
}
  html {
    min-height: 100%;
  }
  __next {
    height: 100%;
    width: 100%;
  }
  body {
    min-height: 100%;
    height: 100%;
    font-family: ${theme.fonts.primary};
    text-decoration: none;
    color: ${theme.colors.black};
    line-height: 1.2em;
  }
  #root {
    height: 100%;
  }
  h1 {
    font-weight: ${fontWeights.bold};
  }
  h2 {
    font-weight: ${fontWeights.regular};
  }
  p {
    font-weight: ${fontWeights.regular};
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
export default GlobalStyle;
