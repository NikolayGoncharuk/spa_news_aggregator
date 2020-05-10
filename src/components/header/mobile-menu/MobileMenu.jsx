import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Icons
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '280px',
  },
}));

export default function MobileMenu(props) {
  const { navItems } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    };
    setOpen(value);
  };

  const setMenuItems = Object.values(navItems).map((item, index) => {
    return (
      <React.Fragment key={index}>
        <Link component={NavLink} to={item.path}>
          <ListItem button>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
        {(index + 1 < Object.values(navItems).length) && <Divider component="li" />}
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.drawer}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {setMenuItems}
          </List>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};