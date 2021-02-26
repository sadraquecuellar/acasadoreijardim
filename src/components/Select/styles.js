import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0;

  label {
    display: flex;
    letter-spacing: 1.5px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: start;
    svg {
      color: ${({ theme }) => theme.black};
      margin-right: 10px;
      font-size: 22px;
    }
  }

  .css-yk16xz-control,
  .css-1pahdxg-control {
    height: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
  }

  .css-1wa3eu0-placeholder {
    color: #ccc;
    font-size: 1.6rem;
    letter-spacing: 0.15em;
    font-weight: bold;
    font-family: 'Roboto', sans-serif !important;
  }
  .css-g1d714-ValueContainer {
    font-size: 1.6rem;
  }

  .css-2b097c-container {
    height: 5rem;
    margin-bottom: 1rem;
  }

  .css-4ljt47-MenuList,
  .css-1rhbuit-multiValue {
    font-size: 1.6rem;
  }
`;
