import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStories, fetchStoriesBySearch } from '../actions/storiesActions';
import Stories from '../components/Stories';

class StoriesContainer extends Component {

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return (
      <>
        <Search getStories={this.props.fetchStoriesBySearch} />
        <Stories stories={this.props.stories} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({ stories: state.stories })
}

export default connect(mapStateToProps, { fetchStoriesBySearch, fetchStories })(StoriesContainer);
