import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Grid from "./Grid";

const ShowListGrid = styled(Grid)``;

interface ShowProps {
  title: string;
  rating: string;
  image: string;
  alt: string;
}

const shows: ShowProps[] = [
  {
    title: "some title 1",
    rating: "some rating",
    image: "/assets/avatar.jpeg",
    alt: "some alt text",
  },
  {
    title: "some other title 2",
    rating: "some other rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some cool alt text",
  },
  {
    title: "some title 3",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 4",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 5",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 6",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 7",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 8",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 9",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 10",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 11",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 12",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 13",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 14",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 15",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 16",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 17",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
  {
    title: "some title 18",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
  },
];

const Show = ({ title, image, alt }: ShowProps) => {
  return (
    <div>
      <Image key={title} alt={alt} src={image} width={200} height={250} />
      <p>{title}</p>
    </div>
  );
};

const ShowList = () => {
  return (
    <ShowListGrid
      gridRowGap={8}
      gridColumnGap={[0, 4, 8, 8]}
      gridTemplateColumns={[
        "repeat(1, 100% [col-start])",
        "repeat(2, 1fr [col-start])",
        "repeat(3, 1fr [col-start])",
        "repeat(4, 1fr [col-start])",
        "repeat(6, 1fr [col-start])",
      ]}
    >
      {shows.map(Show)}
    </ShowListGrid>
  );
};

export default ShowList;
