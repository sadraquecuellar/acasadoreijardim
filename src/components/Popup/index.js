import styled, { css } from 'styled-components';

const Modal = styled.div`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color-black, 0.8);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba($color-black, 0.3);
  }

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;

      .content {
        opacity: 1 !important;
        transform: scale(1) !important;
      }
    `}

  .content {
    width: 90%;
    max-height: 90vh;
    background-color: #fff;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    overflow: scroll;
    opacity: 1;
    transform: scale(0.25);
    transition: all 0.5s 0.2s;

    .content-header {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      font-size: 30px;
      color: #7159c1;
    }
  }
`;

export default Modal;
