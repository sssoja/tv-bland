import {
  LayoutProps,
  SpaceProps,
  TypographyProps,
  layout,
  space,
  typography,
} from "styled-system";

import Flex from "./styles/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Padding from "./styles/Padding";
import Rating from "./Rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

type StyledComponentProps = TypographyProps & LayoutProps & SpaceProps;

const ShowSummary = styled.div<StyledComponentProps>`
  ${typography};
`;

const ShowImage = styled.img<StyledComponentProps>`
  ${layout};
`;

const ShowTitle = styled.h2<StyledComponentProps>`
  ${typography};
  ${space};
`;

const ShowLink = styled.a<StyledComponentProps>`
  width: fit-content;
`;

interface ShowHeaderProps {
  name: string;
  image: string;
  summary: string;
  rating: { average: number };
}

const ShowHeader = (props: ShowHeaderProps) => {
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
            <Rating rating={props.rating} />
          </Flex>
          <ShowTitle fontSize={4} my={4}>
            {props.name}
          </ShowTitle>
          <ShowSummary
            fontSize={2}
            dangerouslySetInnerHTML={{ __html: props.summary }}
            overflow="scroll"
          />
        </Flex>
      </Flex>
    </Padding>
  );
};

export default ShowHeader;
