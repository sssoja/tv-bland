import React from "react";
import Head from "next/head";
import ShowBody from "../../components/ShowBody";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Header from "../../components/Header";
import ShowHeader from "../../components/ShowHeader";

export type ShowType = {
  show: {
    name: string;
    image: { medium: string } | null;
    description: string;
    rating: { average: number };
    id: number;
    genres: string[];
    network: { name: string } | null;
    status: string;
    schedule: { days: string[] };
  };
};

const fallbackImage = "/assets/avatar.jpeg";
const fallbackNetwork = "Not available";

const Show = ({ show }: ShowType) => {
  const { name, description, rating, genres, status, schedule } = show;
  const showImage = show.image ? show.image.medium : fallbackImage;
  const showNetwork = show.network ? show.network.name : fallbackNetwork;

  const router = useRouter();
  if (!router.isFallback && !name) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <title>Loading…</title>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{name}</title>
                <meta content={showImage} />
              </Head>
              <ShowHeader
                name={name}
                image={showImage}
                description={description}
                rating={rating}
              />
              <ShowBody
                genres={genres}
                network={showNetwork}
                schedule={schedule}
                status={status}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

Show.getInitialProps = async (ctx: any) => {
  const res = await fetch(`http://api.tvmaze.com/shows/${ctx.query.show}`);

  const json = await res.json();

  return {
    show: {
      name: json.name,
      image: json.image,
      description: json.summary,
      rating: json.rating,
      genres: json.genres,
      network: json.network,
      schedule: json.schedule,
      status: json.status,
    },
  };
};

export default Show;
