import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
