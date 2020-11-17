import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "../styles/reset.css";
import GlobalStyle from "./../GlobalStyle";
import Flex from "../components/Flex";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" p={6} overflow="auto" height="100%">
        <Component {...pageProps} />
      </Flex>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
