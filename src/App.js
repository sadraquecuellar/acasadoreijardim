import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes/index';
import history from './services/history';


import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />

        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
