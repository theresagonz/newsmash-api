import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentMashes from '../components/RecentMashes';
import TopLinks from '../components/TopLinks';
import { getRecentMashes } from '../actions/mashActions';

class SearchSidebar extends Component {
  componentDidMount() {
    // Get recent mashes from api and add to store
    this.props.getRecentMashes();
  }

  componentDidUpdate() {
    // this.props.getRecentMashes();
  }

  render() {
    console.log('in SearchSidebar render, this.props.recentMashes', this.props.recentMashes)
    return (
      <div className="sidebar">
        <TopLinks />
        <RecentMashes recentMashes={this.props.recentMashes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recentMashes: state.mash.recentMashes
});

export default connect(mapStateToProps, { getRecentMashes })(SearchSidebar);
