import React from "react";
import Image from "next/image";
import Grid from "./styled/Grid";
import Link from "next/link";
import Padding from "./styled/Padding";
import { ShowType } from "../pages/shows/[show]";
import styled from "styled-components";
import Rating from "./Rating";

const Div = styled.div`
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
`;

const fallbackImage = "/assets/avatar.jpeg";

const Show = ({ show }: ShowType) => {
  const image = show.image ? show.image.medium : fallbackImage;

  return (
    <Div key={show.id}>
      <Link as={`/shows/${show.id}`} href="/shows/[show]">
        <a>
          <Image
            alt={`Cover Image for ${show.name}`}
            src={image}
            width={414}
            height={639}
          />
        </a>
      </Link>
      <Rating rating={show.rating} />
      <p>{show.name}</p>
    </Div>
  );
};

type ShowsType = ShowType[];

type ShowsProps = {
  shows: ShowsType;
};

const Shows = (props: ShowsProps) => {
  const { shows } = props;

  return (
    <Padding px={6}>
      <Grid
        gridRowGap={8}
        gridColumnGap={[0, 4, 8, 8]}
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(2, 1fr [col-start])",
          "repeat(3, 1fr [col-start])",
          "repeat(5, 1fr [col-start])",
        ]}
      >
        {shows.map(Show)}
      </Grid>
    </Padding>
  );
};

export default Shows;
