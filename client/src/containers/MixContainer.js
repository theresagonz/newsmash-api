import React, { Component } from 'react';
import { connect } from 'react-redux';
import MixSearch from '../components/MixSearch';
import { getStoriesAndUpdateStore, searchStoriesAndUpdateStore } from '../actions/mixActions';
import Mix from '../components/Mix';

class MixContainer extends Component {

  componentDidMount() {
    // searchTerm exists if input is from HomeSearch
    // or if nested url entered directly in address bar
    let searchTerm = this.props.location.text;
    if (searchTerm) {
      this.props.searchStoriesAndUpdateStore(searchTerm);
    } else {
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
