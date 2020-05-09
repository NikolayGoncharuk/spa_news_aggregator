import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Container from '@material-ui/core/Container';
// Components
import NewsPage from './pages/news-page/NewsPage';
import AboutPage from './pages/about-page/AboutPage';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '56px',
    paddingBottom: '56px',
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Switch>
        <Route exact path="/">
          <Redirect to='/news' />
        </Route>
        <Route path='/news' component={NewsPage} />
        <Route path='/about' component={AboutPage} />
        <Redirect to='/news' />
      </Switch>
    </Container>
  );
};