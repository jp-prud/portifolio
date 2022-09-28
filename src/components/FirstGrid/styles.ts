import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ImageList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  img {
    width: 33%;
    max-width: 400px;
  }
`;
