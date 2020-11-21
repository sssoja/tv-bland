import React from "react";
import Image from "next/image";
import Grid from "./Grid";
import Link from "next/link";
import Padding from "./Padding";

interface ShowProps {
  title: string;
  rating: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

const shows: ShowProps[] = [
  {
    title: "some title 1",
    rating: "some rating",
    image: "/assets/avatar.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some other title 2",
    rating: "some other rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some cool alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 3",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 4",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 5",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 6",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 7",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 8",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 9",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 10",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 11",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 12",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 13",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 14",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 15",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 16",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 17",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
  {
    title: "some title 18",
    rating: "some rating",
    image: "/assets/tv-bland-show.jpeg",
    alt: "some alt text",
    width: 414,
    height: 639,
  },
];

const Show = ({ title, image, alt, width, height }: ShowProps) => {
  return (
    <div>
      <Link href="/shows/show">
        <a>
          <Image
            key={title}
            alt={alt}
            src={image}
            width={width}
            height={height}
          />
        </a>
      </Link>
      <p>{title}</p>
    </div>
  );
};

const Shows = () => {
  return (
    <Padding px={6}>
      <Grid
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
      </Grid>
    </Padding>
  );
};

export default Shows;
