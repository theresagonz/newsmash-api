import React, { Component } from 'react';
import { connect } from 'react-redux';
import MixSearch from '../components/MixSearch';
import { getStoriesAndUpdateStore, searchStoriesAndUpdateStore } from '../actions/mixActions';
import Mix from '../components/Mix';

class MixContainer extends Component {

  componentDidMount() {
    // searchTerm exists if input is from HomeSearch
    // or if nested url entered directly in address bar
    debugger
    let searchTerm = this.props.location.text || this.props.match.params.topic;
    if (searchTerm) {
      debugger
      this.props.searchStoriesAndUpdateStore(searchTerm);
    } else {
      debugger
      this.props.getStoriesAndUpdateStore();
    }
  }

  render() {
    return (
      <div className="mix-container">
        <MixSearch getMix={this.props.searchStoriesAndUpdateStore}  />
        <Mix stories={this.props.stories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ stories: state.stories });
};

export default connect(mapStateToProps, { getStoriesAndUpdateStore, searchStoriesAndUpdateStore })(MixContainer);
