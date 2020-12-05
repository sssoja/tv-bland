import Container from "../components/core/Container";
import { EpisodeType } from "./shows/[show]";
import Head from "next/head";
import Header from "../components/core/Header";
import Intro from "../components/core/Intro";
import Layout from "../components/core/Layout";

type EpisodesType = EpisodeType[];

type ShowsProps = {
  shows: EpisodesType | null;
};

const Home = ({ shows }: ShowsProps) => {
  return (
    <Layout>
      <Head>
        <title>TV Bland</title>
      </Head>
      <Container>
        <Header />
        {shows ? <Intro shows={shows} /> : "sorry!"}
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  try {
    throw new Error();

    const res = await fetch("http://api.tvmaze.com/schedule?country=US");
    const json = await res.json();

    return {
      shows: json,
    };
  } catch (error) {
    return { shows: null };
  }
};

export default Home;
