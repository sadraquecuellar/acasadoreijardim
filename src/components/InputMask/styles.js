import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

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
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 0 10px;
    text-decoration: none;

    &::-webkit-input-placeholder {
      /* Edge */
      color: #ccc;
      font-size: 16px;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #ccc;
      font-size: 16px;
    }

    &::placeholder {
      color: #ccc;
      font-size: 16px;
    }
  }
`;
