import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';

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
  fetchHeadlines: text => dispatch({ type: 'FETCH_HEADLINES', payload: text })
});

export default connect(null, mapDispatchToProps)(HeadlinesContainer);
