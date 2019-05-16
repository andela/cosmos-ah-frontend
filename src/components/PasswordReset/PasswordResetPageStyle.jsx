import styled from 'styled-components';

export const Center = styled.div`
  text-align: center;
`;

export const ContainerStyle = styled.div`
  margin: 0 auto;
  margin-top: 10%;
  width: 40%;
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 770px) and (max-width: 1115px) {
    width: 70%;
  }
`;

export const HeaderStyle = styled.div`
  margin-top: 100px;
  h1 {
    letter-spacing: 2px;
    color: #484949;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 23px;
    }
  }
  @media (min-width: 770px) and (max-width: 1115px) {
    h1 {
      font-size: 20px;
    }
  }`;

export const AlignRight = styled.p`
  text-align: right;
  font-size: 17px;
  padding: 5px 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
