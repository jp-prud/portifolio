import React from "react";
import Button from "../button";
import { Wrapper } from "./styles";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <Wrapper>
          <h3>Implantação e Evolução de Incriveis Projetos ⚡</h3>
          <span>
            Explore a grande quantidade de projetos presentes e descubra qual é
            a melhor solução para o seu produto.
          </span>

          <Button type="button">Explorar</Button>
        </Wrapper>
      </Carousel.Item>{" "}
      <Carousel.Item>
        <Wrapper>
          <h3>Conheça Sobre Nossas Novas Soluções 🌟</h3>
          <span>
            Profissional dedicado, Código performático & Lojas que convertem.
          </span>

          <Button type="button">Descubra mais</Button>
        </Wrapper>
      </Carousel.Item>
    </Carousel>
  );
}
