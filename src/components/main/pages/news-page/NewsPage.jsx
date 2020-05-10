import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { getArticles, getLatestArticles } from '../../../../model/reducers/newsReducer';
// Styled Components
import Grid from '@material-ui/core/Grid';
// Components
import Articles from './articles/Articles';
import ArticlePage from './article-page/ArticlePage';
import ProgressButton from './progress-button/ProgressButton';
import Sidebar from './sidebar/Sidebar';

const mapStateToProps = (state) => ({
  articles: state.news.articles,
  newsParams: state.news.newsParams,
  latestArticles: state.news.latestArticles,
});

export default connect(mapStateToProps, { getArticles, getLatestArticles })(
  function NewsPage(props) {
    const { articles, getArticles, newsParams } = props;
    const match = useRouteMatch();
    const [isInitial, setIsInitial] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      const fetch = async () => {
        setIsInitial(false);
        await getArticles(newsParams);
        setIsInitial(true);
      };
      fetch();
    }, [newsParams]);

    // Определение страницы для запроса
    const getPage = async () => {
      setLoading(true);
      const page = articles.length / newsParams.pageSize + 1;
      await getArticles({ ...newsParams, page });
      setLoading(false);
    };

    return (
      <Grid container>
        <Grid item xs={12} md={9}>
          <Switch>
            <Route exact path={match.path}>
              <Articles
                isInitial={isInitial}
                articles={articles}
                newsParams={newsParams}
              />
              <ProgressButton
                articles={articles}
                getPage={getPage}
                isInitial={isInitial}
                loading={loading}
              />
            </Route>
            <Route path={`${match.path}/:articleId`}>
              <ArticlePage newsParams={newsParams} />
            </Route>
          </Switch>
        </Grid>
        <Grid item xs md={3}>
          <Sidebar
            newsParams={newsParams}
            isInitial={isInitial}
          />
        </Grid>
      </Grid>
    );
  }
);