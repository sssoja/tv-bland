import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
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
import Padding from "./styled/Padding";
import Rating from "./Rating";
import Flex from "./styled/Flex";

type ShowHeaderProps = TypographyProps & ColorProps & LayoutProps & SpaceProps;

const ShowDescription = styled.p<ShowHeaderProps>`
  ${typography};
  ${color};
`;

const ShowImage = styled.img<ShowHeaderProps>`
  ${layout};
`;

const ShowTitle = styled.h2<ShowHeaderProps>`
  ${typography};
  ${space};
`;

const ShowLink = styled.a<ShowHeaderProps>`
  width: fit-content;
`;

interface ShowProps {
  name: string;
  image: string;
  description: string;
  rating: { average: number };
}

// TO DO replace the 5 placeholder stars on lines 57 - 61 with the result of renderFullStars()
const ShowHeader = (props: ShowProps) => {
  return (
    <Padding px={6} pb={[0, 0, 0, 6]}>
      <Flex flexDirection={["column", "column", "column", "row"]}>
        <Link href="/">
          <ShowLink>
            <ShowImage src={props.image} maxHeight={[420, 420, 300, 300]} />
          </ShowLink>
        </Link>
        <Flex flexDirection="column" my={4} p={[0, 0, 0, 4]}>
          <Flex flexDirection={["column", "row", "row", "row"]}>
            <Flex mr={4}>
              <FontAwesomeIcon icon={faStar} color="grey" />
              <FontAwesomeIcon icon={faStar} color="grey" />
              <FontAwesomeIcon icon={faStar} color="grey" />
              <FontAwesomeIcon icon={faStar} color="lightGrey" />
              <FontAwesomeIcon icon={faStar} color="lightGrey" />
            </Flex>
            <Rating rating={props.rating} />
          </Flex>
          <ShowTitle fontSize={4} my={4}>
            {props.name}
          </ShowTitle>

          <ShowDescription
            fontSize={2}
            dangerouslySetInnerHTML={{ __html: props.description }}
            overflow="scroll"
          />
        </Flex>
      </Flex>
    </Padding>
  );
};

export default ShowHeader;
