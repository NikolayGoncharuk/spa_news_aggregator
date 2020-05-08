import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../../../model/reducers/newsReducer';
//Components
import Articles from './articles/Articles';

export default connect(null, { getNews })(
  function NewsPage(props) {

    React.useEffect(() => {
      props.getNews();
    });

    return (
      <Articles />
    );
  }
);