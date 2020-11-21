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

const H3 = styled.h3<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const P = styled.p<TypographyProps & ColorProps>`
  ${typography};
  ${color};
`;

const ShowImage = styled.img<LayoutProps>`
  ${layout};
`;

const Show = () => {
  return (
    <>
      <Head>
        <title>Show</title>
      </Head>
      <Link href="/">
        <a>
          <h1>TV Bland</h1>
        </a>
      </Link>
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
            <P fontSize={1}>{show.rating}</P>
          </Flex>

          <H3 fontSize={4} my={4}>
            {show.title}
          </H3>
          <P fontSize={2} color="darkGrey">
            {show.description}
          </P>
        </Flex>
      </Flex>
      <ShowData />
    </>
  );
};

export default Show;
