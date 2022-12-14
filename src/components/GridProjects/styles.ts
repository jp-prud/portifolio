import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 48px;
  margin-block: 98px;
`;

export const Details = styled.div`
  color: ${({ theme }) => theme.colors.white};

  h3 {
    font: bold 48px/54px "Manrope", sans-serif;
  }

  @media (max-width: 760px) {
    h3 {
      font-size: 36px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }

  * {
    font-family: "Mulish", sans-serif;
  }

  .details {
    width: 100%;
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

    @media (max-width: 760px) {
      h3 {
        text-align: left;
        align-items: start !important;
        flex-direction: column;
        gap: 8px;
        font-size: 24px;

        .evaluate {
          font-size: 16px;
        }
      }

      h3 + span {
        display: none;
      }
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
  gap: 36px;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gray[600]};
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: left;
  gap: 16px;

  > img {
    height: 384px;
    width: 100%;
    max-width: 560px;
    border-radius: 16px;
    object-fit: cover;
    object-position: left;

    @media (max-width: 980px) {
      max-width: 100%;
    }
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

  img {
    height: 92px;
    width: 92px;
    border-radius: 50px;
  }

  .details {
    width: 100%;
    gap: 8px;

    h3 {
      width: 100%;
      margin: 0;
      font-size: 24px;
    }

    span {
      font-size: 16px !important;
    }
  }
`;
