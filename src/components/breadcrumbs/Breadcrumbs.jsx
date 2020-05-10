import React from 'react';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Breadcrumbs as BreadcrumbsComponent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// Icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '40px 0',
  },
  breadcrumb: {
    margin: 'auto',
  },
  navigateIcon: {
    height: '100%',
    marginTop: '8px',
  },
}));

export default function Breadcrumbs() {
  const classes = useStyles();

  const breadcrumbNameMap = {
    '/news': 'Новости',
    '/about': 'О нас',
    '/help': 'Помощь',
    '/settings': 'Настройки',
  }

  // Если путь существует делает ссылками все пути кроме последнего, в противном случае возращает null 
  const setPathnames = (pathnames) => {
    return pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      if (breadcrumbNameMap[to]) {
        if (index === pathnames.length - 1) {
          return (
            <Typography variant="h3" color="textPrimary" key={index}>
              {breadcrumbNameMap[to]}
            </Typography>
          );
        } else {
          return (
            <Link component={RouterLink} color="inherit" to={to} key={index}>
              <Typography variant="h3" color="textPrimary">
                {breadcrumbNameMap[to]}
              </Typography>
            </Link>
          );
        };
      } else return null;
    });
  };

  // Создает массив путей
  const setBreadcrumbs = ({ location }) => {
    const pathnames = location.pathname.split('/').filter(item => item);
    return (
      <BreadcrumbsComponent
        className={classes.breadcrumb}
        separator={<NavigateNextIcon className={classes.navigateIcon} />}
      >
        {setPathnames(pathnames)}
      </BreadcrumbsComponent>
    );
  };

  return (
    <Paper
      elevation={0}
      square
      className={classes.root}
    >
      <Container>
        <Route>
          {setBreadcrumbs}
        </Route>
      </Container>
    </Paper>
  );
};