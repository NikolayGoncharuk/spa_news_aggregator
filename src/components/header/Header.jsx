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

const useStyles = makeStyles(theme => ({
  navItems: {
    padding: '20px 30px',
    minWidth: 0,
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
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Агрегатор новостей</Typography>
          </Grid>
          <Grid item>
            <Tabs
              value={navItemValue}
              onChange={handleNavItem}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              {setNavItems()}
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};