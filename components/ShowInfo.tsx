import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  color,
  flexbox,
  layout,
} from "styled-system";

import Grid from "./styles/Grid";
import Padding from "./styles/Padding";
import React from "react";
import { ShowType } from "../pages/shows/[show]";
import styled from "styled-components";

type StyledComponentProps = ColorProps & LayoutProps & FlexboxProps;

const ShowInfoListItem = styled.li<StyledComponentProps>`
  text-align: left;
`;

const ShowInfoData = styled.p<StyledComponentProps>`
  ${color};
`;

const GridCell = styled.div<StyledComponentProps>`
  ${layout};
  ${flexbox}
`;

type ShowInfoProps = Pick<
  ShowType,
  "schedule" | "status" | "genres" | "network" | "url"
>;

const fallbackNetwork = "Not available";

const ShowInfo = (props: ShowInfoProps) => {
  const network = props.network ? props.network.name : fallbackNetwork;
  const schedule = props.schedule.days.join(", ");
  const genres = props.genres.join(", ");
  const layouts = ["flex", "flex", "flex", "contents"];

  return (
    <Padding my={[0, 4, 4, 0]}>
      <h3>Show Info</h3>
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
            <ShowInfoListItem>Streamed On</ShowInfoListItem>
            <ShowInfoData color="grey">{network}</ShowInfoData>
          </GridCell>
          <GridCell display={layouts} flexDirection="column">
            <ShowInfoListItem>Schedule</ShowInfoListItem>
            <ShowInfoData color="grey">{schedule}</ShowInfoData>
          </GridCell>
          <GridCell display={layouts} flexDirection="column">
            <ShowInfoListItem>Status</ShowInfoListItem>
            <ShowInfoData color="grey">{props.status}</ShowInfoData>
          </GridCell>
          <GridCell display={layouts} flexDirection="column">
            <ShowInfoListItem>Genres</ShowInfoListItem>
            <ShowInfoData color="grey">{genres}</ShowInfoData>
          </GridCell>
        </Grid>
      </ul>
    </Padding>
  );
};

export default ShowInfo;
