import Container from "../components/core/Container";
import { EpisodeType } from "./shows/[show]";
import Head from "next/head";
import Header from "../components/core/Header";
import Intro from "../components/Intro";
import Layout from "../components/core/Layout";

type EpisodesType = EpisodeType[];

type ShowsProps = {
  shows: EpisodesType;
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
  try {
    const res = await fetch("http://api.tvmaze.com/schedule?country=GB");
    const json = await res.json();

    // de-duplicating episodes thanks to:
    // https://dev.to/matthewoates/comment/8hdm
    const seen = new Set();
    const filteredEpisodes = json.filter((episode: EpisodeType) => {
      const duplicate = seen.has(episode.show.id);
      seen.add(episode.show.id);
      return !duplicate;
    });

    return {
      shows: filteredEpisodes,
    };
  } catch (error) {
    return { shows: null };
  }
};

export default Home;
