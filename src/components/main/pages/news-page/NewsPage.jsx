import React from 'react';
import { connect } from 'react-redux';
import { getNewsResponse } from '../../../../model/reducers/newsReducer';
//Components
import Articles from './articles/Articles';

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
      <div>
        <Articles
          loading={loading}
          newsResponse={props.newsResponse}
        />
      </div>
    );
  }
);