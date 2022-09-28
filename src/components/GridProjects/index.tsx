import React from "react";

import {
  Container,
  Details,
  Wrapper,
  RightSection,
  Card,
  LeftSection,
  ResumeCard,
} from "./styles";

import JapanStore from "../../assets/Japan.png";
import Avatar from "../../assets/Avatar.png";
import Avatar2 from "../../assets/Avatar-2.png";
import Avatar3 from "../../assets/Avatar-3.png";
import Avatar4 from "../../assets/Avatar-4.png";

export default function GridProjects() {
  return (
    <Container>
      <Details>
        <h3>Principais Caos de Uso 🎖️</h3>
      </Details>

      <Wrapper>
        <LeftSection>
          <Card>
            <img alt="Japan Store" src={JapanStore} />

            <div className="wrapper">
              <img alt="Avatar" src={Avatar} />

              <div className="details">
                <h3>
                  Japan Store <span className="evaluate">+126.23%</span>
                </h3>
                <span>
                  Criada em São Paulo como o canal varejista online de uma
                  consolidada importadora [...].
                </span>
              </div>
            </div>
          </Card>
        </LeftSection>

        <RightSection>
          <ResumeCard>
            <img alt="Avatar - 2" src={Avatar2} />

            <div className="details">
              <h3>
                New Balance
                <span className="evaluate">+106.23%</span>
              </h3>

              <span>
                A New Balance é uma marca global demonstra uma liderança
                responsávela qual os atletas têm orgulho em usar, associados tem
                orgulho em criar.
              </span>
            </div>
          </ResumeCard>
          <ResumeCard>
            <img alt="Avatar - 3" src={Avatar3} />

            <div className="details">
              <h3>
                The North Face
                <span className="evaluate">+106.23%</span>
              </h3>

              <span>
                Roupas esportivas sempre foram vistas como sinônimo de
                qualidade, tecnologia e conforto e é este o objetivo da The
                North Face, criada em 1966.
              </span>
            </div>
          </ResumeCard>
          <ResumeCard>
            <img alt="Avatar - 4" src={Avatar4} />

            <div className="details">
              <h3>
                Livro Facil
                <span className="evaluate">+106.23%</span>
              </h3>

              <span>
                Atendendo o segmento de educação e livros escolares exige
                profundo conhecimento e organização.
              </span>
            </div>
          </ResumeCard>
        </RightSection>
      </Wrapper>
    </Container>
  );
}
