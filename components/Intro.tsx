import React from "react";
import Shows from "./Shows";

const Intro = () => {
  return (
    <section>
      <h1>TV Bland</h1>
      <p>
        TV Show and web series database. Create personalised schedules. Episode
        guide, cast, crew and character information.
      </p>
      <section>
        <h2>Last Added Shows</h2>
        <Shows />
      </section>
    </section>
  );
};

export default Intro;
