import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Container from '@material-ui/core/Container';
// Components
import NewsPage from './pages/news-page/NewsPage';

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
      <NewsPage />
    </Container>
  );
};