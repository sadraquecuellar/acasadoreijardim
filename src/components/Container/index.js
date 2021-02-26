import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background: #fdfae9;
  flex: 1;
  overflow: hidden;

  @media (min-width: 900px) {
    max-width: 900px;
    padding: 0 25px;
    min-width: 0;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export default Container;
