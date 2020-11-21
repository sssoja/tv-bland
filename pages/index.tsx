import Head from "next/head";
import React from "react";
import Container from "../components/Container";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>TV Bland</title>
      </Head>
      <Container>
        <Intro />
      </Container>
    </Layout>
  );
};

export default Home;
