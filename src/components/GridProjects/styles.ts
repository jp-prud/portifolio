import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 48px;
  margin-block: 98px;
  padding-inline: 32px;
`;

export const Details = styled.div`
  color: ${({ theme }) => theme.colors.white};

  h3 {
    font: bold 48px/54px "Manrope", sans-serif;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    > div {
      width: 100%;
    }
  }

  * {
    font-family: "Mulish", sans-serif;
  }

  .details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    color: ${({ theme }) => theme.colors.white};

    > img {
      object-fit: contain;
    }

    > h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 32px;
      width: 100%;

      .evaluate {
        font: bold 24px/26px "Mulish", sans-serif;
        color: ${({ theme }) => theme.colors.green};
      }
    }

    > span {
      opacity: 0.6;
    }
  }
`;

export const LeftSection = styled.div`
  width: 50%;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gray[600]};
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: left;

  > image {
    width: 100%;
    max-width: 560px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    img {
      height: 74px;
      width: 74px;
      border-radius: 32px;
    }
  }
`;

export const ResumeCard = styled.div`
  height: 160px;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[600]};
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  .details {
    gap: 8px;

    img {
      height: 116px;
      width: 116px;
      border-radius: 58px;
    }

    h3 {
      font-size: 24px;
    }

    span {
      font-size: 16px !important;
    }
  }
`;
