import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  layout,
  space,
  typography,
} from "styled-system";

import Flex from "./styled/Flex";
import Grid from "./styled/Grid";
import styled from "styled-components";

type CastProps = BorderProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  ColorProps;

const P = styled.p<CastProps>`
  ${typography};
  ${color};
  ${space};
`;

const CastListItem = styled.li<CastProps>`
  ${typography};
`;

const CircularPortrait = styled.div<CastProps>`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  ${layout};
`;

const Avatar = styled.img<CastProps>`
  width: 100%;
  height: auto;
`;

const Div = styled.div<CastProps>`
  ${border};
  ${layout};
`;

type CastMemberProps = CastMemberType;

export type CastMemberType = {
  person: { name: string; image: { medium: string } };
  character: { name: string } | null;
  url: string;
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
    <Grid
      gridRowGap={1}
      gridTemplateRows={[
        "repeat(1, 1fr [row-start])",
        "repeat(1, 1fr [row-start])",
        "(4, 1fr)",
      ]}
      gridTemplateColumns={["repeat(1, 362px [col-start])"]}
    >
      <CastListItem key={props.url} fontSize={2}>
        <Flex alignItems="center">
          <CircularPortrait width={50} height={50}>
            <Avatar src={castImage}></Avatar>
          </CircularPortrait>
          <P>{castMember}</P>
          <P>{characterName}</P>
        </Flex>
        <Div
          borderBottom="solid"
          borderWidth="thin"
          borderColor="grey"
          display={["none", "none", "none", "block"]}
        ></Div>
      </CastListItem>
    </Grid>
  );
};

type CastListProps = { castList: CastMemberType[] };

const CastList = (props: CastListProps) => {
  const { castList } = props;

  return (
    <div>
      Starring
      <ul>{castList.slice(0, 4).map(CastMember)}</ul>
    </div>
  );
};

export default CastList;
