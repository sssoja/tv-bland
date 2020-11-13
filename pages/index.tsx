import Head from "next/head";
import styled from "styled-components";
import { SpaceProps, space, TypographyProps, typography } from "styled-system";
import ShowList from "../components/ShowList";

const Main = styled.main<SpaceProps>`
  ${space};
`;

const Section = styled.section<SpaceProps>`
  ${space};
`;

const Footer = styled.footer``;

const H1 = styled.h1<TypographyProps>`
  ${typography};
`;

const H2 = styled.h2<TypographyProps>`
  ${typography};
`;

const P = styled.p``;

const Home = () => {
  return (
    <Main p={5}>
      <Head>
        <title>TV Bland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <H1>TV Bland</H1>
        <P>
          TV Show and web series database. Create personalised schedules.
          Episode guide, cast, crew and character information.
        </P>
      </Section>
      <Section>
        <H2>Last Added Shows</H2>
        <ShowList />
      </Section>
      <Footer />
    </Main>
  );
};

export default Home;
