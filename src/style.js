import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 2000px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin-top: 100px;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 55px;
`;

export const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  align-items: stretch;
`;

export const CountryCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  border-radius: 7px;
  box-shadow: 1px 2px 8px #dbdbdb;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 1px 10px 20px #dbdbdb;
  }
`;

export const Img = styled.img`
  width: 100px;
  margin: 0 auto 15px auto;
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 28px;
  margin: 0px 0px 10px 0px;
`;

export const P = styled.p`
  font-size: 23px;
  margin: 0px;
  color: #6f6f6f;
`;
