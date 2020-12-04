import { CastMemberType } from "../../components/CastList";
import Container from "../../components/core/Container";
import ErrorPage from "next/error";
import Head from "next/head";
import Header from "../../components/core/Header";
import Layout from "../../components/core/Layout";
import ShowBody from "../../components/ShowBody";
import ShowHeader from "../../components/ShowHeader";
import { useRouter } from "next/router";

export type ShowPageProps = {
  show: ShowType;
  castList: CastMemberType[];
};

export type EpisodeType = {
  show: ShowType;
};

export type ShowType = {
  name: string;
  image: { medium: string } | null;
  summary: string;
  rating: { average: number };
  id: number;
  genres: string[];
  network: { name: string } | null;
  status: string;
  schedule: { days: string[] };
  url: string;
};

const fallbackImage = "/assets/avatar.jpeg";

const Show = (props: ShowPageProps) => {
  const {
    name,
    summary,
    rating,
    genres,
    status,
    schedule,
    url,
    image,
    network,
  } = props.show;

  const showImage = image ? image.medium : fallbackImage;

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
                showName={name}
                image={showImage}
                summary={summary}
                rating={rating}
              />
              <ShowBody
                genres={genres}
                network={network}
                schedule={schedule}
                status={status}
                url={url}
                castList={props.castList}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

Show.getInitialProps = async (ctx: any) => {
  const res = await fetch(
    `http://api.tvmaze.com/shows/${ctx.query.show}?embed=cast`
  );

  const json = await res.json();

  const cast = json._embedded ? json._embedded.cast : [];

  return {
    show: {
      showName: json.name,
      image: json.image,
      summary: json.summary,
      rating: json.rating,
      genres: json.genres,
      network: json.network,
      schedule: json.schedule,
      status: json.status,
      url: json.url,
    },
    castList: cast,
  };
};

export default Show;
