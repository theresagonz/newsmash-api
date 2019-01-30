import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import TopLinks from '../components/TopLinks';
import { getRecentMashes } from '../actions/mashActions';
import RecentMashes from '../components/RecentMashes';

class MySidebar extends Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: false,
    };
  }

  onSetSidebarOpen = () => {
    // let toggleOpen = ;
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  componentDidMount() {
    this.props.getRecentMashes();
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div className="sidebar">
            <TopLinks />
            <RecentMashes recentMashes={this.props.recentMashes} />
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <button className="hamburger hamburger--spin" type="button" onClick={this.onSetSidebarOpen}>
          <span className="hamburger-box toggle-sidebar-btn">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Sidebar>
    );
  }
}

const mapStateToProps = state => ({
  recentMashes: state.mash.recentMashes,
});

export default connect(
  mapStateToProps,
  { getRecentMashes }
)(MySidebar);
