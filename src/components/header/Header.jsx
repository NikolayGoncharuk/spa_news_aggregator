import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
// Components
import ScrollTop from './scroll-top/ScrollTop';
import MobileMenu from './mobile-menu/MobileMenu';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
  },
  tab: {
    height: '70px',
    minWidth: 0,
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
}));

export default function Header(props) {
  const { navItems } = props;
  const classes = useStyles();
  const location = useLocation();

  // Удаляет все кроменачального пути
  const initialLocation = `/${location.pathname.split('/')[1]}`;
  const [navItemPath, setNavItemPath] = React.useState(initialLocation);

  // Следит за изменением адреса
  React.useEffect(() => {
    setNavItemPath(initialLocation);
  }, [location.pathname]);

  const handleNavItem = (event, value) => {
    setNavItemPath(value);
  };

  const setNavItems = () => (
    Object.values(navItems).map((item, index) => (
      <Tab
        key={index}
        className={classes.tab}
        component={NavLink}
        to={item.path}
        label={item.name}
        disableRipple
        value={item.path}
      />
    ))
  );

  return (
    <React.Fragment>
      <AppBar
        className={classes.root}
        position="static"
        color="transparent"
      >
        <Toolbar variant="dense">
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link component={NavLink} to={navItems.news.path}>
                <Typography variant="h4">Агрегатор новостей</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Grid item>
                <Tabs
                  className={classes.sectionDesktop}
                  value={navItemPath}
                  onChange={handleNavItem}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  {setNavItems()}
                </Tabs>
                <div className={classes.sectionMobile}>
                  <MobileMenu navItems={navItems} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ScrollTop />
    </React.Fragment>
  );
};