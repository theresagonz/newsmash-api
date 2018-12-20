import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeSearch from '../components/HomeSearch';
import { searchStoriesAndUpdateStore } from '../actions/mixActions';

class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Get a mix</h1>
        <HomeSearch searchStoriesAndUpdateStore={this.props.searchStoriesAndUpdateStore} />
        <h1>Get a mash</h1>
        <HomeSearch />
      </div>
    );
  }
}

export default connect(null, { searchStoriesAndUpdateStore })(WelcomeContainer);
