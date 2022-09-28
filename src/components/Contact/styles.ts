import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 16px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1125px;
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

    &::first-line {
      font-weight: 800;
      font-size: 50px;
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
