import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStories } from '../actions/storiesActions';
import Stories from '../components/Stories';

class StoriesContainer extends Component {

  componentDidMount() {
    fetchStories();
  }

  render() {
    return (
      <div>
        <Search fetchStories={this.props.fetchStories} />
        <Stories stories={this.props.stories} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state.stories', state.stories)
  return ({ stories: state.stories })
}

export default connect(mapStateToProps, { fetchStories })(StoriesContainer);
