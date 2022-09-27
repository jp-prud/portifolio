import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import GridProjects from "../GridProjects";

import { Wrapper } from "./styles";

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <GridProjects />
    </Wrapper>
  );
}
