import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import HomeSearch from '../components/HomeSearch';
import { fetchStoriesBySearch } from '../actions/storiesActions';

class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <HomeSearch prompt="Get news from around the web about: " getMix={this.props.getStoriesBySearch} />
        <HomeSearch prompt="Get word mash about: " />
        <HomeSearch prompt="Get word mash from: " />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStoriesBySearch: () => dispatch(fetchStoriesBySearch)
  };
};

export default connect(null, mapDispatchToProps)(WelcomeContainer);
