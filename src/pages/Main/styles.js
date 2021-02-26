import styled from 'styled-components';

export const ImageLogo = styled.div`
  margin-bottom: 10px;
  img{
    margin-top:20px;
    width: 200px;
    border-radius: 3px;
  }
`;

export const MenuProducts =  styled.div`
  display: flex;
  img{
    width: 100%;
  }
`;

export const TitleOrder = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 3.5rem;
    color: ${({ theme }) => theme.primaryDark};
  }
  @media(max-width: 1000px){
    h1{
      font-size: 2.7rem;
    }
  }
  @media(max-width: 700px){
    h1{
      font-size: 1.9rem;
    }
  }

`;

export const ObsContainer = styled.div`
  width: 100%;
  h4 {
    margin-bottom: 10px;
    color: #7159c1;
    font-size: 20px;
  }

  textarea {
    width: 100%;
    font-size: 18px;
    padding: 10px 5px;
    border-color: #7159c1;
    font-weight: 700;
  }

  button {
    width: 60% !important;
  }
`;

export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;

  button {
    width: 70%;
  }
`;
