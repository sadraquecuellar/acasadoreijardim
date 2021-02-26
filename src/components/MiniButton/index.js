import styled from 'styled-components';

const MiniButton = styled.div`
  div {
    cursor: pointer;
    margin-bottom: 1rem;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.primaryDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    svg {
      color: ${({ theme }) => theme.black};
      font-size: 2rem;
    }
  }
  div:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default MiniButton;
