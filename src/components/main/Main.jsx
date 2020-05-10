import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Container from '@material-ui/core/Container';
// Components
import NewsPage from './pages/news-page/NewsPage';
import AboutPage from './pages/about-page/AboutPage';
import HelpPage from './pages/help-page/HelpPage';
import SettingsPage from './pages/settings-page/SettingsPage';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '56px',
    paddingBottom: '56px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '32px',
      paddingBottom: '32px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '24px',
      paddingBottom: '24px',
    },
  }
}));

export default function Main(props) {
  const { navItems: { news, about, help, settings } } = props;
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Switch>
        <Route exact path="/">
          <Redirect to={news.path} />
        </Route>
        <Route path={news.path} component={NewsPage} />
        <Route path={about.path} component={AboutPage} />
        <Route path={help.path} component={HelpPage} />
        <Route path={settings.path} component={SettingsPage} />
        <Redirect to={news.path} />
      </Switch>
    </Container>
  );
};