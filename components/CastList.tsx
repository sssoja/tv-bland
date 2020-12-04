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

const ListItem = styled.li<CastProps>`
  ${typography};
`;

const Avatar = styled.img<CastProps>`
  ${border};
  ${layout};
`;

const Div = styled.div<CastProps>`
  ${border};
  ${layout};
`;

const CastContainer = styled.div<CastProps>`
  ${space};
`;

type CastMemberProps = CastMemberType;

export type CastMemberType = {
  castName: string;
  image: { medium: string } | null;
  character: { name: string } | null;
};

const fallbackName = "not available";

const CastMember = (props: CastMemberProps) => {
  const characterName = props.character ? props.character.name : fallbackName;

  return (
    <ListItem key={props.castName} fontSize={2}>
      <Flex alignItems="center">
        {/* <Avatar>{props.image}</Avatar> */}

        <P>{props.castName}</P>
        <P>{characterName}</P>
      </Flex>
      <Div
        borderBottom="solid"
        borderWidth="thin"
        borderColor="grey"
        display={["none", "none", "none", "block"]}
      ></Div>
    </ListItem>
  );
};

type CastListProps = { castList: CastMemberType[] };

const CastList = (props: CastListProps) => {
  const { castList } = props;
  return (
    <Grid
      gridRowGap={1}
      gridTemplateRows={[
        "repeat(1, 1fr [row-start])",
        "repeat(1, 1fr [row-start])",
        "repeat(4, 1fr [row-start])",
      ]}
      gridTemplateColumns={["repeat(1, 362px [col-start])"]}
    >
      <CastContainer mb={[4, 4, 4, 0]}>Starring</CastContainer>
      <ul>{castList.map(CastMember)}</ul>
    </Grid>
  );
};

export default CastList;
