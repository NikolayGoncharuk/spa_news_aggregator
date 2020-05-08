import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Components
import Search from './search/Search';
import Date from './date/Date';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '32px',
  },
  sidebarWidget: {
    paddingBottom: '48px',
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <div className={classes.sidebarWidget}>
        <Search />
      </div>
      <div className={classes.sidebarWidget}>
        <Date />
      </div>
    </aside >
  );
};