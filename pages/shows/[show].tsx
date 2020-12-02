import Container from "../../components/core/Container";
import ErrorPage from "next/error";
import Head from "next/head";
import Header from "../../components/core/Header";
import Layout from "../../components/core/Layout";
import ShowBody from "../../components/ShowBody";
import ShowHeader from "../../components/ShowHeader";
import { useRouter } from "next/router";

export type ShowType = {
  url: string;
  show: {
    name: string;
    image: { medium: string } | null;
    summary: string;
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

const Show = ({ show, url }: ShowType) => {
  const { name, summary, rating, genres, status, schedule } = show;
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
            <article>
              <Head>
                <title>{name}</title>
                <meta content={showImage} />
              </Head>
              <ShowHeader
                name={name}
                image={showImage}
                summary={summary}
                rating={rating}
              />
              <ShowBody
                genres={genres}
                network={showNetwork}
                schedule={schedule}
                status={status}
                url={url}
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
      summary: json.summary,
      rating: json.rating,
      genres: json.genres,
      network: json.network,
      schedule: json.schedule,
      status: json.status,
      url: json.url,
    },
  };
};

export default Show;
