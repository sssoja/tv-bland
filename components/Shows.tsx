import { EpisodeType } from "../pages/shows/[show]";
import Grid from "./styled/Grid";
import Image from "next/image";
import Link from "next/link";
import Padding from "./styled/Padding";
import Rating from "./Rating";
import styled from "styled-components";

const Div = styled.div`
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
`;

const fallbackImage = "/assets/avatar.jpeg";

type ShowProps = EpisodeType;

const Show = (props: ShowProps) => {
  console.log(props.show);
  const { show } = props;
  const image = show.image ? show.image.medium : fallbackImage;

  return (
    <Link as={`/shows/${show.id}`} href="/shows/[show]" key={show.url}>
      <a>
        <Div>
          <Image
            alt={`Cover Image for ${show.name}`}
            src={image}
            width={414}
            height={639}
          />
          <Rating rating={show.rating} />
          <p>{show.name}</p>
        </Div>
      </a>
    </Link>
  );
};

type EpisodesType = EpisodeType[];

type ShowsProps = {
  shows: EpisodesType;
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
