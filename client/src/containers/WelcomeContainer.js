import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStoriesBySearch } from '../actions/storiesActions';

class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <Search prompt="Get news from around the web about: " getStories={this.props.getStoriesBySearch} />
        <Search prompt="Get word mash about: " />
        <Search prompt="Get word mash from: " />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStoriesBySearch: () => dispatch(fetchStoriesBySearch())
  }
}

export default connect(null, mapDispatchToProps)(WelcomeContainer);
