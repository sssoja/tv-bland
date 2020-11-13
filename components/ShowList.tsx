// import showImage from "./assets/tv-bland-show.jpeg";

import React, { Fragment } from "react";
import styled from "styled-components";
import {
  LayoutProps,
  layout,
  typography,
  TypographyProps,
  grid,
  GridProps,
} from "styled-system";

const ShowListGrid = styled.div<GridProps>`
  display: grid;
  ${grid};
`;

const ShowContainer = styled.div<LayoutProps>`
  object-fit: contain;
  height: 100%;
  ${layout};
`;

const ShowImage = styled.img<LayoutProps>`
  height: 100%;
  width: 100%;
  ${layout};
`;

const ShowDescription = styled.p<TypographyProps>`
  ${typography};
`;

interface ShowProps {
  name: string;
  description: string;
  image: string;
  alt: string;
}

const shows: ShowProps[] = [
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
  {
    name: "some other name",
    description: "some other description",
    image: "some-image.png",
    alt: "some cool alt text",
  },
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
  {
    name: "some name",
    description: "some description",
    image: "some-image.png",
    alt: "some alt text",
  },
];

const Show = ({ name, description, image, alt }: ShowProps) => {
  return (
    <ShowContainer key={name}>
      <ShowImage alt={alt} src={image} />
      <ShowDescription>{description}</ShowDescription>
    </ShowContainer>
  );
};

const ShowList = () => {
  return (
    <Fragment>
      <ShowListGrid
        gridRowGap={[1, 1, 1, 0]}
        gridTemplateColumns={[
          "repeat(2, 50% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(4, 25% [col-start])",
          "repeat(4, 25% [col-start])",
        ]}
      >
        {shows.map(Show)}
      </ShowListGrid>
    </Fragment>
  );
};

export default ShowList;
