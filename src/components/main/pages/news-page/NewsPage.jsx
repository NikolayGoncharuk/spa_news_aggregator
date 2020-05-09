import React from 'react';
import { connect } from 'react-redux';
import { getNewsResponse } from '../../../../model/reducers/newsReducer';
// Styled Components
import Grid from '@material-ui/core/Grid';
// Components
import Articles from './articles/Articles';
import ProgressButton from './progress-button/ProgressButton';
import Sidebar from './sidebar/Sidebar';

const mapStateToProps = (state) => ({
  articles: state.news.newsResponse.articles,
  newsParams: state.news.newsParams,
});

export default connect(mapStateToProps, { getNewsResponse })(
  function NewsPage(props) {
    const { articles, getNewsResponse, newsParams } = props;
    const [isInitial, setIsInitial] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      const fetch = async () => {
        await getNewsResponse(newsParams);
        setIsInitial(true);
      };
      fetch();
    }, [newsParams]);

    // Определение страницы для запроса
    const setPage = async () => {
      setLoading(true);
      const page = articles.length / newsParams.pageSize + 1;
      await getNewsResponse({ ...newsParams, page });
      setLoading(false);
    };

    return (
      <Grid container>
        <Grid item xs={9}>
          <Articles
            isInitial={isInitial}
            articles={articles}
            newsParams={newsParams}
          />
          <ProgressButton
            setPage={setPage}
            isInitial={isInitial}
            loading={loading}
          />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    );
  }
);