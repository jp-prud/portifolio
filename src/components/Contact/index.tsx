import React from "react";
import { Wrapper, LeftSection, RightSection } from "./styles";
import Button from "../button";
import { Container } from "./styles";

export default function Contact() {
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <h3>
            Se interessou ? <br /> Entre em contato 🤝
          </h3>
          <span>
            Deixe nosso time entender como podemos agregar valor ao seu negócio.
          </span>
          <Button>Contato</Button>
        </LeftSection>
        <RightSection>
          <img />
        </RightSection>
      </Wrapper>
    </Container>
  );
}
