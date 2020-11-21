import React from "react";
import Padding from "./Padding";
import Shows from "./Shows";

const Intro = () => {
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
        <Shows />
      </section>
    </section>
  );
};

export default Intro;
