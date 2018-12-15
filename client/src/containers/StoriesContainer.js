import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Stories from '../components/Stories';
import { fetchStoriesBySearch } from '../actions/storiesActions';

class StoriesContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/stories')
      .then(response => response.json())
      .then(data => { this.setState({ stories: data }) }); 
  }

  render() {
    return (
      <div>
        <Search fetchStoriesBySearch={this.props.fetchStoriesBySearch} />
        <Stories stories={this.props.stories} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stories: state.stories.stories
})

const mapDispatchToProps = dispatch => ({
  fetchStoriesBySearch: text => dispatch(fetchStoriesBySearch(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);
