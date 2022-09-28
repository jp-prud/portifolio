import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  font-family: "Mulish", sans-serif;

  > .wrapper {
    min-height: 96px;
    width: 100%;
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 760px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const LeftSection = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.white};
`;
