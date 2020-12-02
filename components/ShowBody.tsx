import React from "react";
import styled from "styled-components";
import {
  ColorProps,
  color,
  LayoutProps,
  space,
  SpaceProps,
  grid,
  GridProps,
  layout,
  flexbox,
  FlexboxProps,
} from "styled-system";
import Cast from "./Cast";
import Grid from "./styled/Grid";
import Padding from "./styled/Padding";

type ShowHeaderProps = ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  FlexboxProps;

const Table = styled.table<ShowHeaderProps>`
  ${space};
`;
const TableHeader = styled.th<ShowHeaderProps>`
  text-align: left;
`;

const TableData = styled.td<ShowHeaderProps>`
  ${color};
  ${grid};
`;

const TableCell = styled.div<ShowHeaderProps>`
  ${layout};
  ${flexbox}
`;

interface ShowProps {
  schedule: { days: string[] };
  status: string;
  genres: string[];
  network: string;
}

const ShowBody = (props: ShowProps) => {
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
          <Table my={[0, 4, 4, 0]}>
            Show Info
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
              <TableCell display={layouts} flexDirection="column">
                <TableHeader>Streamed On</TableHeader>
                <TableData color="grey">{props.network}</TableData>
              </TableCell>
              <TableCell display={layouts} flexDirection="column">
                <TableHeader>Schedule</TableHeader>
                <TableData color="grey" gridColumn={2}>
                  {schedule}
                </TableData>
              </TableCell>
              <TableCell display={layouts} flexDirection="column">
                <TableHeader>Status</TableHeader>
                <TableData color="grey">{props.status}</TableData>
              </TableCell>
              <TableCell display={layouts} flexDirection="column">
                <TableHeader>Genres</TableHeader>
                <TableData color="grey">{genres}</TableData>
              </TableCell>
            </Grid>
          </Table>
        </Grid>

        <Grid gridColumn={[1, 1, 1, 2]} gridRow={[2, 2, 2, 1]} mb={8}>
          <Cast />
        </Grid>
      </Grid>
    </Padding>
  );
};

export default ShowBody;
