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

    React.useEffect(() => {
      props.getNewsResponse();
    });

    return (
      <div>
        {props.newsResponse.articles && (<Articles newsResponse={props.newsResponse} />)}
      </div>
    );
  }
);