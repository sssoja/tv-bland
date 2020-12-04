import { EpisodeType } from "../../pages/shows/[show]";
import Padding from "../styled/Padding";
import Shows from "../Shows";

type EpisodesType = EpisodeType[];

type ShowsProps = {
  shows: EpisodesType;
};

const Intro = ({ shows }: ShowsProps) => {
  return (
    <section>
      <Padding px={6} pb={4}>
        <h3>
          TV Show and web series database. Create personalised schedules.
          Episode guide, cast, crew and character information.
        </h3>
      </Padding>

      <section>
        <Padding px={6} pb={4}>
          <h4>Last Added Shows</h4>
        </Padding>
        <Shows shows={shows} />
      </section>
    </section>
  );
};

export default Intro;
