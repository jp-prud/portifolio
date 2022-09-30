import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  margin-top: 120px;
`;

export const Details = styled.div`
  color: ${({ theme }) => theme.colors.white};

  h3 {
    font: bold 48px/54px "Manrope", sans-serif;
  }

  @media (max-width: 760px) {
    h3 {
      font-size: 42px;
    }
  }
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
