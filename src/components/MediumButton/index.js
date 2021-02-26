import styled from 'styled-components';

const MediumButton = styled.div`
  div {
    cursor: pointer;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    width: 10.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.6rem;
    border: 3px solid ${({ theme }) => theme.primaryDark};
    svg {
      color: ${({ theme }) => theme.black};
      font-size: 2rem;
      margin-left: 0.6rem;
      height: 4rem;
    }
  }
  div:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default MediumButton;
