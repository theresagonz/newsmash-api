import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStories } from '../actions/storiesActions';
import Stories from '../components/Stories';

class StoriesContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/stories')
      .then(response => response.json())
      .then(data => {
        console.log('stories', data)
        fetchStories(data)
      }); 
  }

  render() {
    console.log('in render', this.props.stories);
    return (
      <div>
        <Search fetchStories={this.props.fetchStories} />
        <Stories stories={this.props.stories} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ stories: state.stories.stories })
}

export default connect(mapStateToProps, { fetchStories })(StoriesContainer);
