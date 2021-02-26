import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  .row {
    width: 100%;
    display: grid;
    flex-flow: row;
    grid-template-columns: 1fr;
  }
  .row-1-1 {
    display: grid;
    flex-flow: row;
    grid-template-columns: 1fr 1fr;
  }
  .row-1-space-1 {
    display: grid;
    flex-flow: row;
    grid-template-columns: 1fr 1rem 1fr;
  }
  .row-1-2-1 {
    display: grid;
    flex-flow: row;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .row-2-space-1-1 {
    display: grid;
    flex-flow: row;
    grid-template-columns: 2fr 1rem 1fr 1fr;
  }
  .row-2-1 {
    display: grid;
    flex-flow: row;
    grid-template-columns: 2fr 1fr;
  }
  .row-3-space-1 {
    display: grid;
    flex-flow: row;
    grid-template-columns: 3fr 1rem 1fr;
  }
`;

export default Grid;
