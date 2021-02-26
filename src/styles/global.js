import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    --webkit-font-smoothing: antialiased;
    background: ${(({theme}) => theme.primaryDark)};
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
