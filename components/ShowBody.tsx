import CastList, { CastMemberType } from "./CastList";

import Grid from "./styles/Grid";
import Padding from "./styles/Padding";
import React from "react";
import ShowInfo from "./ShowInfo";
import { ShowType } from "../pages/show";

type ShowBodyProps = {
  show: ShowType;
  castList: CastMemberType[];
};

const ShowBody = (props: ShowBodyProps) => {
  return (
    <Padding px={[3, 6, 6, 6]}>
      <Grid
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 40% [col-start])",
        ]}
        gridColumnGap={4}
      >
        <Grid>
          <ShowInfo
            schedule={props.show.schedule}
            url={props.show.url}
            status={props.show.status}
            genres={props.show.genres}
            network={props.show.network}
          />
        </Grid>

        <Grid gridColumn={[1, 1, 1, 2]} gridRow={[2, 2, 2, 1]} mb={8}>
          <CastList castList={props.castList} />
        </Grid>
      </Grid>
    </Padding>
  );
};

export default ShowBody;
