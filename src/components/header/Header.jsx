import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// Styled Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Header() {
  const [navItem, setNavItem] = React.useState(0);

  const handleNavItem = (event, newValue) => {
    setNavItem(newValue);
  };

  const NavTab = withStyles(theme => ({
    root: {
      padding: '20px 30px',
      minWidth: 0,
    },
  }))(props => (
    <Tab
      disableRipple
      component={NavLink}
      {...props}
    />
  ));

  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Агрегатор новостей</Typography>
          </Grid>
          <Grid item>
            <Tabs
              value={navItem}
              onChange={handleNavItem}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <NavTab to="/news" label="Новости" />
              <NavTab to="/about" label="О нас" />
              <NavTab to="/help" label="Помощь" />
              <NavTab to="/settings" label="Настройки" />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};