import styled from 'styled-components';

const Button = styled.div`
  div {
    cursor: pointer;
    margin-bottom: 1rem;
    width: 15rem;
    height: 4rem;
    background: #ff4d4d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    font-size: 1.6rem;
    border: 3px solid ${({ theme }) => theme.primaryDark};
    svg {
      color: ${({ theme }) => theme.black};
      font-size: 2rem;
    }
  }
  div:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default Button;
