import Head from "next/head";
import styled from "styled-components";
import { SpaceProps, space } from "styled-system";
import ShowList from "../components/ShowList";

const Main = styled.main<SpaceProps>`
  ${space};
`;

const P = styled.p``;

const Home = () => {
  return (
    <Main p={5}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <P>hello</P>
      <ShowList />
    </Main>
  );
};

export default Home;
