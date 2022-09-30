import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 16px;
  width: 100%;
  max-width: 1136px;
  margin: 0 auto 80px;

  @media (max-width: 780px) {
    margin-bottom: 56px;
  }
`;

export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`;

export const LeftSection = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme.colors.white};

  h3 {
    font: 600 42px/64px "Manrope", sans-serif;
    margin: 0;

    &::first-line {
      font-weight: 800;
      font-size: 50px;
    }

    @media (max-width: 780px) {
      font-size: 24px;
      line-height: 42px;

      &::first-line {
        font-size: 32px;
      }
    }
  }

  span {
    opacity: 0.6;
  }

  button {
    max-width: 190px;
  }
`;

export const RightSection = styled.div`
  max-width: 470px;
  overflow: hidden;
  border-radius: 16px;

  img {
    height: 516px;
    width: 100%;
    max-width: 500px;
    object-fit: cover;
  }
`;
