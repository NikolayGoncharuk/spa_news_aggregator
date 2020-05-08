import React from 'react';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import makeTheme from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default function App() {
  const theme = responsiveFontSizes(makeTheme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};
