import {
  BorderProps,
  ColorProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  grid,
  layout,
  space,
  typography,
} from "styled-system";

import Flex from "./styles/Flex";
import Grid from "./styles/Grid";
import styled from "styled-components";

const CircularPortrait = styled.div<LayoutProps>`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  align-self: center;
  ${layout};
`;

const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

const P = styled.p<TypographyProps & GridProps & ColorProps & SpaceProps>`
  ${typography};
  ${grid};
  ${color};
  ${space};
  display: flex;
  align-self: center;
`;

const Div = styled.div<BorderProps & LayoutProps>`
  ${border};
  ${layout};
`;

type CastMemberProps = CastMemberType;

export type CastMemberType = {
  person: { name: string; image: { medium: string }; id: number };
  character: { name: string } | null;
};
const fallbackName = "not available";
const fallbackImage = "/assets/avatar.jpeg";

const CastMember = (props: CastMemberProps) => {
  const characterName = props.character ? props.character.name : fallbackName;
  const castMember = props.person ? props.person.name : fallbackName;
  const castImage = props.person.image
    ? props.person.image.medium
    : fallbackImage;

  return (
    <Flex alignItems="center" key={props.person.id}>
      <li>
        <Grid
          gridTemplateColumns={[
            "65px 120px 120px",
            "65px 120px 120px",
            "65px 120px 120px",
            "75px 150px 180px",
          ]}
          my={1}
        >
          <CircularPortrait width={50} height={50}>
            <Avatar src={castImage}></Avatar>
          </CircularPortrait>
          <P gridColumn={2} fontSize={2} mr={1}>
            {castMember}
          </P>
          <P gridColumn={3} fontSize={2} color="grey" ml={1}>
            {characterName}
          </P>
        </Grid>
        <Div
          borderBottom="solid"
          borderWidth="thin"
          borderColor="grey"
          display={["none", "none", "none", "block"]}
        ></Div>
      </li>
    </Flex>
  );
};

type CastListProps = { castList: CastMemberType[] };

const CastList = (props: CastListProps) => {
  const { castList } = props;

  return (
    <div>
      <h3>Starring</h3>
      <ul>{castList.slice(0, 4).map(CastMember)}</ul>
    </div>
  );
};

export default CastList;
