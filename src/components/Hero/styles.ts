import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding-inline: 32px;

  h3 {
    font-weight: 700;
    font-size: 60px;
    line-height: 104px;
    font-family: "Manrope", sans-serif;
  }

  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    font-family: "Mulish", sans-serif;
    opacity: 0.6;
  }

  button {
    max-width: 174px;
  }
`;
