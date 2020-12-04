import CastList, { CastMemberType } from "./CastList";
import {
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  color,
  flexbox,
  grid,
  layout,
  space,
} from "styled-system";

import Grid from "./styled/Grid";
import Padding from "./styled/Padding";
import { ShowType } from "../pages/shows/[show]";
import styled from "styled-components";

type ShowHeaderProps = ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  FlexboxProps;

const ShowInfoContainer = styled.div<ShowHeaderProps>`
  ${space};
`;

const ShowInfo = styled.li<ShowHeaderProps>`
  text-align: left;
`;

const ShowInfoData = styled.p<ShowHeaderProps>`
  ${color};
  ${grid};
`;

const GridCell = styled.div<ShowHeaderProps>`
  ${layout};
  ${flexbox}
`;

type ShowBodyProps = Pick<
  ShowType,
  "schedule" | "status" | "genres" | "network" | "url"
> & {
  castList: CastMemberType[];
};

const fallbackNetwork = "Not available";

const ShowBody = (props: ShowBodyProps) => {
  const network = props.network ? props.network.name : fallbackNetwork;
  const schedule = props.schedule.days.join(", ");
  const genres = props.genres.join(", ");
  const layouts = ["flex", "flex", "flex", "contents"];

  return (
    <Padding px={6}>
      <Grid
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
        ]}
        gridColumnGap={4}
      >
        <Grid>
          <ShowInfoContainer my={[0, 4, 4, 0]}>
            Show Info
            <ul>
              <Grid
                gridTemplateColumns={["repeat(1, 50% [col-start])", "30% 50%"]}
                gridTemplateRows={[
                  "repeat(1, 1fr [row-start])",
                  "repeat(2, 50% [row-start])",
                  "repeat(2, 50% [row-start])",
                  "repeat(4, 1fr [row-start])",
                ]}
                fontSize={2}
                gridRowGap={[4, 4, 2, 2]}
                gridColumnGap={4}
                my={4}
              >
                <GridCell display={layouts} flexDirection="column">
                  <ShowInfo>Streamed On</ShowInfo>
                  <ShowInfoData color="grey">{network}</ShowInfoData>
                </GridCell>
                <GridCell display={layouts} flexDirection="column">
                  <ShowInfo>Schedule</ShowInfo>
                  <ShowInfoData color="grey" gridColumn={2}>
                    {schedule}
                  </ShowInfoData>
                </GridCell>
                <GridCell display={layouts} flexDirection="column">
                  <ShowInfo>Status</ShowInfo>
                  <ShowInfoData color="grey">{props.status}</ShowInfoData>
                </GridCell>
                <GridCell display={layouts} flexDirection="column">
                  <ShowInfo>Genres</ShowInfo>
                  <ShowInfoData color="grey">{genres}</ShowInfoData>
                </GridCell>
              </Grid>
            </ul>
          </ShowInfoContainer>
        </Grid>

        <Grid gridColumn={[1, 1, 1, 2]} gridRow={[2, 2, 2, 1]} mb={8}>
          <CastList castList={props.castList} />
        </Grid>
      </Grid>
    </Padding>
  );
};

export default ShowBody;
