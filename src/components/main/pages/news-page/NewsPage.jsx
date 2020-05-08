import React from 'react';
import { connect } from 'react-redux';
import { getNewsResponse } from '../../../../model/reducers/newsReducer';
// Styled Components
import Grid from '@material-ui/core/Grid';
//Components
import Articles from './articles/Articles';
import ProgressButton from './progress-button/ProgressButton';
import Sidebar from './sidebar/Sidebar';

const mapStateToProps = (state) => ({
  newsResponse: state.news.newsResponse,
});

export default connect(mapStateToProps, { getNewsResponse })(
  function NewsPage(props) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      setLoading(true);
      props.getNewsResponse(() => setLoading(false));
    }, []);

    return (
      <Grid container>
        <Grid item xs={9}>
          <Articles
            loading={loading}
            newsResponse={props.newsResponse}
          />
          <ProgressButton />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    );
  }
);