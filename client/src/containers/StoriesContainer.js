import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStoriesBySearch } from '../actions/storiesActions';

class StoriesContainer extends Component {

  render() {
    return (
      <Search fetchStoriesBySearch={this.props.fetchStoriesBySearch} />
    )
  }
}

// const mapStateToProps = state => ({
//   searchText: state.searchText
// })

const mapDispatchToProps = dispatch => ({
  fetchStoriesBySearch: text => dispatch(fetchStoriesBySearch(text))
});

export default connect(null, mapDispatchToProps)(StoriesContainer);
