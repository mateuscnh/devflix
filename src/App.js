import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Routes />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
