import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
