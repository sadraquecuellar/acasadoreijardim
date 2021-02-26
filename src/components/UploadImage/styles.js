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
      color: #7159c1;
      margin-right: 10px;
      font-size: 22px;
    }
  }

  input {
    visibility: hidden;
    display: none;
  }

  .insert-image {
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    border: 1px dashed #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0;
    padding: 0 0;
  }

  small {
    font-size: 1.1rem;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.DarkGray};
  }
`;
