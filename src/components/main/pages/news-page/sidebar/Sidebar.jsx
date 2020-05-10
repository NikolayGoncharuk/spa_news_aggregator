import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Styled Components
import Box from '@material-ui/core/Box';
// Components
import SearchWidget from './search-widget/SearchWidget';
import DateWidget from './date-widget/DateWidget';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '32px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      marginLeft: 0,
    },
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
        <SearchWidget
          searchValue={props.newsParams.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </Widget>
      <Widget>
        <DateWidget
          date={props.newsParams.date}
          setDate={props.setDate}
        />
      </Widget>
    </aside >
  );
};