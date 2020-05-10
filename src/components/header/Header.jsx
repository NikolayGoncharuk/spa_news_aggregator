import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Components
import ScrollTop from './scroll-top/ScrollTop';
import MobileMenu from './mobile-menu/MobileMenu';

const useStyles = makeStyles(theme => ({
  navItems: {
    padding: '20px 30px',
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
  const [navItemValue, setNavItemValue] = React.useState(0);

  const handleNavItem = (event, newValue) => {
    setNavItemValue(newValue);
  };

  const setNavItems = () => (
    Object.values(navItems).map((item, index) => (
      <Tab
        key={index}
        className={classes.navItems}
        component={NavLink}
        to={item.path}
        label={item.name}
        disableRipple
        {...props}
      />
    ))
  );

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4">Агрегатор новостей</Typography>
            </Grid>
            <Grid item>
              <Grid item>
                <Tabs
                  className={classes.sectionDesktop}
                  value={navItemValue}
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