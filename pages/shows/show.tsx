import Link from "next/link";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import {
  TypographyProps,
  typography,
  ColorProps,
  color,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import Flex from "../../components/Flex";
import ShowData from "../../components/ShowData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Header from "../../components/Header";
import Padding from "../../components/Padding";

interface ShowProps {
  title: string;
  rating: number;
  description: string;
  image: string;
  alt: string;
}

const show: ShowProps = {
  title: "This is the title of the TV show which is very long isn't is",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Molestie ac feugiat sed lectus. Commodo nulla facilisi nullam vehicula ipsum. Sociis natoque penatibus et magnis dis. Sit amet justo donec enim diam vulputate ut pharetra sit.",
  rating: 4.5,
  image: "/assets/avatar.jpeg",
  alt: "some alt text",
};

type ParagraphProps = TypographyProps & ColorProps;
const ShowDescription = styled.p<ParagraphProps>`
  ${typography};
  ${color};
`;

const ShowRating = styled.p<ParagraphProps>`
  ${typography};
  ${color};
`;

const ShowImage = styled.img<LayoutProps>`
  ${layout};
`;

const ShowTitle = styled.h3<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const Show = () => {
  const router = useRouter();
  if (!router.isFallback && !show?.title) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <ShowTitle>Loading…</ShowTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{show.title}</title>
                <meta content={show.image} />
              </Head>
              <Padding px={6}>
                <Flex
                  flexDirection={["column", "column", "column", "row"]}
                  my={[0, 0, 0, 4]}
                >
                  <Link href="/">
                    <a>
                      <ShowImage src={show.image} maxWidth="100%" />
                    </a>
                  </Link>
                  <Flex flexDirection="column" my={4} p={[0, 0, 0, 4]}>
                    <Flex flexDirection="row">
                      <Flex mr={4}>
                        <FontAwesomeIcon icon={faStar} color="grey" />
                        <FontAwesomeIcon icon={faStar} color="grey" />
                        <FontAwesomeIcon icon={faStar} color="grey" />
                        <FontAwesomeIcon icon={faStar} color="lightGrey" />
                      </Flex>
                      <ShowRating fontSize={1}>{show.rating}</ShowRating>
                    </Flex>
                    <ShowTitle fontSize={4} my={4}>
                      {show.title}
                    </ShowTitle>
                    <ShowDescription fontSize={2} color="darkGrey">
                      {show.description}
                    </ShowDescription>
                  </Flex>
                </Flex>
              </Padding>
              <ShowData />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Show;
