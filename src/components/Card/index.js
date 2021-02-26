import styled from 'styled-components';

const Card = styled.div`
  margin: 1.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column;
  align-items: center;

  /* --------- Card dashboard ---------  */
  .content {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
  }
  .title {
    font-size: 2.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.LightGray};
  }
  .body {
    font-size: 4.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.DarkGray};
  }
  /* --------- Card dashboard ---------  */

  /* ---------  Card display product ---------  */
  .image {
    position: relative;
    margin: 0;
    padding: 0;
    height: 15rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }
  }
  .overlay {
    cursor: pointer;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5);
    width: 35%;
    transition: 0.5s ease;
    position: absolute;
    top: 0;
    opacity: 0;
    border-radius: 0.5rem;

    color: white;
    padding: 0.7rem;
    font-size: 2rem;
    text-align: center;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
  .image:hover .overlay {
    opacity: 1;
  }
  .description {
    z-index: 1;
    background-color: ${({ theme }) => theme.white};
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 -1.3rem 1rem rgba(255, 255, 255, 1);
    padding-bottom: 1rem;
    .name {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.DarkGray};
    }
  }
  /* ---------  Card display product ---------  */

  .header {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1.3rem 0 1.3rem 0;
    font-size: 2.1rem;
    text-transform: uppercase;
    border-bottom: 1px solid #ccc;
    color: ${({ theme }) => theme.DarkGray};
  }

  /* ---------  Card preview ---------  */
  .content_preview {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    img {
      width: 15rem;
      height: 15rem;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      /* border: 1px solid #ccc; */
    }
    .name_preview {
      margin: 0.5rem 0 0.5rem 0;
      font-size: 1.9rem;
      color: ${({ theme }) => theme.DarkGray};
    }
    .description_preview {
      margin: 0.5rem 0 0.5rem 0;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.DarkGray};
    }
    .category_preview {
      margin: 0.3rem 0 0.3rem 0;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.DarkGray};
    }
  }
  /* ---------  Card preview ---------  */

  /* ---------  Card List ---------  */
  .list {
    color: ${({ theme }) => theme.DarkGray};
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 1.5rem;
    max-height: 21.6rem;
    height: 20rem;
    overflow: auto;
  }
  .item-list {
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .box-icons {
    width: 20%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    svg {
      font-size: 2rem;
      cursor: pointer;
    }
    svg:hover {
      color: #666;
    }
  }
  /* ---------  Card List ---------  */
`;

export default Card;
