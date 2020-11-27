import React from "react";
import styled from "styled-components";
import {
  layout,
  space,
  typography,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  BorderProps,
  color,
  ColorProps,
} from "styled-system";

import Flex from "./Flex";
import Grid from "./Grid";

interface CastMemberProps {
  avatar: string;
  name: string;
  character: string;
}

const cast: CastMemberProps[] = [
  {
    avatar: "/assets/avatar.jpeg",
    name: "Nigella Lawson",
    character: "some character",
  },
  {
    avatar: "/assets/avatar.jpeg",
    name: "Gordon Ramsey",
    character: "some character",
  },
  {
    avatar: "/assets/avatar.jpeg",
    name: "Jamie Oliver",
    character: "some character",
  },
  {
    avatar: "/assets/avatar.jpeg",
    name: "Paul Hollywood",
    character: "some character",
  },
];

type CastProps = BorderProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

const P = styled.p<CastProps>`
  ${typography};
  ${color};
  ${space};
`;

const List = styled.ul<CastProps>`
  ${typography};
`;

const Avatar = styled.img<CastProps>`
  ${border};
  ${layout};
`;

const Div = styled.div<CastProps>`
  ${border};
  ${color};
  ${layout};
  ${space};
`;

const Table = styled.table<CastProps>`
  ${space};
`;

const CastMember = ({ name, avatar, character }: CastMemberProps) => {
  return (
    <List key={name} fontSize={2}>
      <Flex alignItems="center">
        <Avatar
          src={avatar}
          width={35}
          height={35}
          borderRadius="50%"
          alt={name}
        ></Avatar>
        <Flex flexDirection={["column", "column", "column", "row"]} mx={8}>
          <P mr={8}>{name}</P>
          <P ml={[0, 0, 0, 8]} color="grey">
            {character}
          </P>
        </Flex>
      </Flex>
      <Div
        borderBottom="solid"
        borderWidth="thin"
        borderColor="grey"
        display={["none", "none", "none", "block"]}
      ></Div>
    </List>
  );
};

const Cast = () => {
  return (
    <Grid
      gridRowGap={1}
      gridTemplateRows={["repeat(4, 1fr [row-start])"]}
      gridTemplateColumns={["repeat(1, 70% [col-start])"]}
    >
      <Table mb={[4, 4, 4, 0]}>Starring</Table>
      {cast.map(CastMember)}
    </Grid>
  );
};

export default Cast;