import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Components
import Search from './search/Search';
import Date from './date/Date';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '32px',
  },
}));

const Widget = withStyles(theme => ({
  root: {
    paddingBottom: '48px',
  },
}))(props => <div {...props} />);

export default function Sidebar() {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <Widget>
        <Search />
      </Widget>
      <Widget>
        <Date />
      </Widget>
    </aside >
  );
};