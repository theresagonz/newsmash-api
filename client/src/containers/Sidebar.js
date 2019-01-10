import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopLinks from '../components/TopLinks';
import { getRecentMashes } from '../actions/mashActions';
import RecentMashes from '../components/RecentMashes';

class Sidebar extends Component {
  componentDidMount() {
    this.props.getRecentMashes();
  }

  render() {
    return (
      <div className="sidebar">
        <TopLinks />
        <RecentMashes recentMashes={this.props.recentMashes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recentMashes: state.mash.recentMashes,
});

export default connect(mapStateToProps, { getRecentMashes })(Sidebar);
