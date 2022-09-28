import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-inline: 32px;
`;

export const ImageList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
`;
