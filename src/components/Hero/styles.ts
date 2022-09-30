import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-block: 20px;

  h3 {
    font: 700 60px/104px "Manrope", sans-serif;
  }

  span {
    font-size: 400 20px/30px "Mulish", sans-serif;
    opacity: 0.6;
  }

  button {
    max-width: 174px;
  }

  @media (max-width: 980px) {
    margin-block: 60px;

    h3 {
      font-size: 42px;
      line-height: 56px;
    }
  }
`;
