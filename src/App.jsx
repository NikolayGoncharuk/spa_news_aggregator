import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import makeTheme from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const mapStateToProps = (state) => ({
  theme: state.theme
});

export default connect(mapStateToProps, {})(
  function App(props) {
    const theme = responsiveFontSizes(makeTheme(props.theme));
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Breadcrumbs />
        <Main />
        <Footer />
      </ThemeProvider>
    );
  }
);
