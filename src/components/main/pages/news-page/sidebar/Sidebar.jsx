import React from 'react';
import { connect } from 'react-redux';
import { getLatestArticles, setSearchValue, setDate } from '../../../../../model/reducers/newsReducer';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Styled Components
import Box from '@material-ui/core/Box';
// Components
import SearchWidget from './search-widget/SearchWidget';
import DateWidget from './date-widget/DateWidget';
import LatestArticles from './latest-articles/LatestArticles';

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

const mapStateToProps = (state) => ({
  latestArticles: state.news.latestArticles,
});

export default connect(mapStateToProps, { getLatestArticles, setSearchValue, setDate })(
  function Sidebar(props) {
    const { latestArticles, getLatestArticles, setSearchValue, setDate, newsParams, isInitial } = props;
    const classes = useStyles();

    return (
      <aside className={classes.root}>
        <Widget>
          <SearchWidget
            searchValue={newsParams.searchValue}
            setSearchValue={setSearchValue}
          />
        </Widget>
        <Widget>
          <DateWidget
            date={newsParams.date}
            setDate={setDate}
          />
        </Widget>
        <Widget>
          <LatestArticles
            isInitial={isInitial}
            newsParams={newsParams}
            latestArticles={latestArticles}
            getLatestArticles={getLatestArticles}
          />
        </Widget>
      </aside >
    );
  }
);