import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 60px;
  background:  rgb(33, 33, 33); // Solent Grey

  @media (max-width: 1000px) {
    padding: 0px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 100px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  font-size: 24px;
  color: white;
  margin-top: 40px;
  font-weight: bold;
  text-decoration: none;

  a:visited {
      color: white;
  }
`;
