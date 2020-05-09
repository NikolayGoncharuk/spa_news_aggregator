import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    pageSize: state.news.newsParams.pageSize,
    fontSize: state.theme.typography.fontSize,
    darkMode: state.theme.darkMode
  };
};

export default connect(mapStateToProps, {})(
  function SettingsPage() {
    return (
      <div>

      </div >
    );
  }
);