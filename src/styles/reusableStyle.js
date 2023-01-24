import styled from "styled-components";

export const CustomContainer = styled.div`
  max-width: 991px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: 767px;
  }
  @media screen and (max-width: 850px) {
    max-width: 575px;
  }
  @media screen and (max-width: 590px) {
    margin: 0 15px;
  }
`;

export const Heading = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.position};
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
`;

export const TopImageBanner = styled.img`
  width: 600px;
  height: auto;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 550px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 600px;
  height: auto;
  display: block;
  margin: 50px auto;
  padding: ${(props) => props.padding};
  box-sizing: border-box;

  @media (max-width: 767px) {
    margin: 30px auto;
    width: 550px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;
