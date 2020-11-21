import React from "react";
import styled from "styled-components";
import {
  TypographyProps,
  typography,
  ColorProps,
  color,
  border,
  BorderProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import Flex from "./Flex";
import Grid from "./Grid";
import Padding from "./Padding";

const H4 = styled.h4<TypographyProps>`
  ${typography};
`;

const P = styled.p<TypographyProps & ColorProps & SpaceProps>`
  ${typography};
  ${color};
  ${space};
`;

const List = styled.ul<TypographyProps>`
  ${typography};
`;

const Avatar = styled.img<BorderProps & LayoutProps>`
  ${border};
  ${layout};
`;

const Div = styled.div<BorderProps & ColorProps & LayoutProps & SpaceProps>`
  ${border};
  ${color};
  ${layout};
  ${space};
`;

interface ShowInfoProps {
  label: string;
  value: string;
}

//TODO replace values with API data
const showInfo: ShowInfoProps[] = [
  {
    label: "Streamed On",
    value: "BBC Three",
  },
  {
    label: "Schedule",
    value: "Tuesdays",
  },
  {
    label: "Status",
    value: "Running",
  },
  {
    label: "Genres",
    value: "Drama, Comedy, Music",
  },
];

const ShowInfoItem = ({ label, value }: ShowInfoProps) => {
  return (
    <List key={label} fontSize={2}>
      <Grid
        my={4}
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 40% [col-start])",
          "repeat(2, 40% [col-start])",
        ]}
      >
        <li>{label}</li>
        <Grid gridColumn={[1, 1, 1, 2]}>
          <P color="grey">{value}</P>
        </Grid>
      </Grid>
      <Div
        borderBottom="solid"
        borderWidth="thin"
        borderColor="grey"
        display={["none", "none", "none", "block"]}
      ></Div>
    </List>
  );
};

interface CastProps {
  avatar: string;
  name: string;
  character: string;
}

const cast: CastProps[] = [
  {
    avatar: "/assets/avatar.jpeg",
    name: "some actor",
    character: "some character",
  },
  {
    avatar: "/assets/avatar.jpeg",
    name: "some actor",
    character: "some character",
  },
  {
    avatar: "/assets/avatar.jpeg",
    name: "some actor",
    character: "some character",
  },
  {
    avatar: "/assets/avatar.jpeg",
    name: "some actor",
    character: "some character",
  },
];

const castMember = ({ avatar, name, character }: CastProps) => {
  return (
    <List key={name} fontSize={2}>
      <Grid mt={4} gridTemplateColumns={["repeat(1, 100% [col-start])"]}>
        <Flex alignItems="center">
          <Avatar
            src={avatar}
            width={35}
            height={35}
            borderRadius="50%"
            alt={name}
          ></Avatar>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            mx={[4, 4, 4, 8]}
          >
            <P mr={8}>{name}</P>
            <P ml={[0, 0, 0, 8]} color="grey">
              {character}
            </P>
          </Flex>
        </Flex>
      </Grid>
      <Div
        borderBottom="solid"
        borderWidth="thin"
        borderColor="grey"
        display={["none", "none", "none", "block"]}
        pt={1}
      ></Div>
    </List>
  );
};

const ShowData = () => {
  return (
    <>
      <Padding px={6}>
        <Grid
          gridTemplateColumns={[
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(2, 47% [col-start])",
            "repeat(2, 47% [col-start])",
          ]}
          gridColumnGap={10}
          gridRowGap={4}
          my={4}
        >
          <Grid gridColumn={1}>
            <H4 fontSize={3}>Show Info</H4>
            <Grid
              gridTemplateColumns={[
                "repeat(2, 50% [col-start])",
                "repeat(2, 50% [col-start])",
                "repeat(2, 50% [col-start])",
                "repeat(1, 100% [col-start])",
                "repeat(1, 100% [col-start])",
              ]}
            >
              {showInfo.map(ShowInfoItem)}
            </Grid>
          </Grid>

          <Grid gridColumn={[1, 1, 1, 2]}>
            <H4 fontSize={3}>Starring</H4>
            {cast.map(castMember)}
          </Grid>
        </Grid>
      </Padding>
    </>
  );
};

export default ShowData;
