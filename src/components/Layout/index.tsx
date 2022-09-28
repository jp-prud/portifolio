import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import GridProjects from "../GridProjects";

import { Wrapper } from "./styles";
import Contact from "../Contact";
import Footer from "../Footer";
import FirstGrid from "../FirstGrid";

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <FirstGrid />
      <GridProjects />
      <Contact />
      <Footer />
    </Wrapper>
  );
}
