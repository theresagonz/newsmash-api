import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchStoriesAndUpdateStore } from '../actions/mixActions';
import { getMashWords, getTopMashes } from '../actions/mashActions';

class SearchSidebar extends Component {
  render() {
    console.log('this.props.getTopMashes :', this.props.getTopMashes);
    return (
      <div className="sidebar">
        <Search
          searchType="mix"
          getContent={this.props.searchStoriesAndUpdateStore}
          history={this.props.history}
        />
        <Search
          searchType="mash"
          getContent={this.props.getTopMashes}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default connect(null, { searchStoriesAndUpdateStore, getTopMashes })(SearchSidebar);
