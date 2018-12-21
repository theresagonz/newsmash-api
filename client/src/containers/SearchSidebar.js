import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeSearch from '../components/HomeSearch';
import MixSearch from '../components/MixSearch';
import { searchStoriesAndUpdateStore } from '../actions/mixActions';

class SearchSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h4>Get a mix</h4>
        <MixSearch getMix={this.props.searchStoriesAndUpdateStore} />
        <h4>Get a mash</h4>
        <HomeSearch />
      </div>
    );
  }
}

export default connect(null, { searchStoriesAndUpdateStore })(SearchSidebar);
