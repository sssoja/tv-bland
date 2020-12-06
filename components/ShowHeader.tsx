import {
  LayoutProps,
  SpaceProps,
  TypographyProps,
  layout,
  space,
  typography,
} from "styled-system";

import Flex from "./styles/Flex";
import Link from "next/link";
import Padding from "./styles/Padding";
import Rating from "./Rating";
import styled from "styled-components";

const ShowSummary = styled.div<TypographyProps>`
  ${typography};
`;

const ShowImage = styled.img<LayoutProps>`
  ${layout};
`;

const ShowTitle = styled.h2<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const ShowImageContainer = styled.div`
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
    <Flex
      px={[3, 6, 6, 6]}
      pb={[0, 0, 0, 6]}
      flexDirection={["column", "column", "column", "row"]}
    >
      <ShowImageContainer>
        <Link href="/">
          <a>
            <ShowImage src={props.image} maxHeight={[420, 420, 300, 300]} />
          </a>
        </Link>
      </ShowImageContainer>
      <Flex flexDirection="column" my={4} p={[0, 0, 0, 4]}>
        <Flex flexDirection={["column", "row", "row", "row"]}>
          <Rating rating={props.rating} showNumbers />
        </Flex>
        <ShowTitle fontSize={4} my={4}>
          {props.name}
        </ShowTitle>
        <ShowSummary
          fontSize={2}
          dangerouslySetInnerHTML={{ __html: props.summary }}
        />
      </Flex>
    </Flex>
  );
};

export default ShowHeader;
