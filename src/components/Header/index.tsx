import React from "react";
import { Container, LeftSection, RightSection, Link } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className="wrapper">
        <LeftSection>
          <h3>Jpprud_</h3>
        </LeftSection>

        <RightSection>
          <Link href="">Projetos</Link>
          <Link href="">Skills</Link>
          <Link href="">Sobre</Link>
          <Link href="">Contato</Link>
        </RightSection>
      </div>
    </Container>
  );
}
