import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchHeadlines } from '../actions/headlineActions'

class HeadlinesContainer extends Component {

  render() {
    return (
      <Search fetchHeadlines={this.props.fetchHeadlines} />
    )
  }
}

// const mapStateToProps = state => ({
//   searchText: state.searchText
// })

const mapDispatchToProps = dispatch => ({

  fetchHeadlines: text => dispatch(fetchHeadlines)
});

export default connect(null, mapDispatchToProps)(HeadlinesContainer);
