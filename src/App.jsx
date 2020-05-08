import React from 'react';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import makeTheme from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  const theme = responsiveFontSizes(makeTheme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};
