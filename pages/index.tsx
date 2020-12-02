import Container from "../components/core/Container";
import Head from "next/head";
import Header from "../components/core/Header";
import Intro from "../components/core/Intro";
import Layout from "../components/core/Layout";
import { ShowType } from "./shows/[show]";

type ShowsType = ShowType[];

type ShowsProps = {
  shows: ShowsType;
};

const Home = ({ shows }: ShowsProps) => {
  return (
    <Layout>
      <Head>
        <title>TV Bland</title>
      </Head>
      <Container>
        <Header />
        <Intro shows={shows} />
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://api.tvmaze.com/schedule?country=US");
  const json = await res.json();
  return {
    shows: json,
  };
};

export default Home;
