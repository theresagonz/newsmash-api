import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStoriesBySearch } from '../actions/storiesActions';
import Stories from '../components/Stories';

class StoriesContainer extends Component {

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
