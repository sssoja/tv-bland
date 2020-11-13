import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "../styles/globals.css";
import GlobalStyle from "./../GlobalStyle";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
