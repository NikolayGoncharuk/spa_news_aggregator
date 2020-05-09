import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Styled Components
import Box from '@material-ui/core/Box';
// Components
import Search from './search/Search';
import Date from './date/Date';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '32px',
  },
}));

const Widget = withStyles(theme => ({
  root: { paddingBottom: '48px' },
}))(props => <Box {...props} />);

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <Widget>
        <Search
          searchValue={props.newsParams.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </Widget>
      <Widget>
        <Date />
      </Widget>
    </aside >
  );
};