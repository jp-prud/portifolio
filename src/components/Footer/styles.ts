import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: end;
  padding-block: 24px;

  span {
    width: 100%;
    display: block;
    font-family: 'Mulish', sans-serif;
    font-size: 16px;
    opacity: .6;
    color: ${({ theme }) => theme.colors.white};
    padding-top: 40px;
    border-top: 1px solid ${({ theme }) => theme.colors.white};
`;
