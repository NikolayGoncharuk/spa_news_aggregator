import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Container from '@material-ui/core/Container';
// Components
import ArticlesPage from './pages/articles-page/ArticlesPage';

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
      <ArticlesPage />
    </Container>
  );
};