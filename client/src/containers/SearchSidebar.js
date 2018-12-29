import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentMashes from '../components/RecentMashes';
import Search from '../components/Search';
import { fetchMixSearch } from '../actions/mixActions';
import { getMashWords, getRecentMashes } from '../actions/mashActions';

class SearchSidebar extends Component {
  componentDidMount() {
    // Get recent mashes from api and add to store
    this.props.getRecentMashes();
  }

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
        <RecentMashes recentMashes={this.props.recentMashes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recentMashes: state.mash.recentMashes
});

export default connect(mapStateToProps, { fetchMixSearch, getMashWords, getRecentMashes })(SearchSidebar);
