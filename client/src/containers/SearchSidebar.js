import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchStoriesAndUpdateStore } from '../actions/mixActions';
import { getMashWords } from '../actions/mashActions';

class SearchSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Search
          searchType="mix"
          getContent={this.props.searchStoriesAndUpdateStore}
          history={this.props.history}
        />
        <Search
          searchType="mash"
          getContent={this.props.getMashWords}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default connect(null, { searchStoriesAndUpdateStore, getMashWords })(SearchSidebar);
