import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchMixSearch } from '../actions/mixActions';
import { getMashWords } from '../actions/mashActions';

class SearchSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Search
          searchType="mix"
          getContent={this.props.fetchMixSearch}
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

export default connect(null, { fetchMixSearch, getMashWords })(SearchSidebar);
