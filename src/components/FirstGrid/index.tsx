import React from "react";

import { Wrapper, ImageList } from "./styles";

import Project from "../../assets/Project.png";
import Project2 from "../../assets/Project-2.png";
import Project3 from "../../assets/Project-3.png";

export default function FirstGrid() {
  return (
    <Wrapper>
      <ImageList>
        <img src={Project} alt="Hero" />
        <img src={Project2} alt="Hero" />
        <img src={Project3} alt="Hero" />
      </ImageList>
    </Wrapper>
  );
}
