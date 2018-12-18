import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchStories, fetchStoriesBySearch } from '../actions/storiesActions';
import Stories from '../components/Stories';

// this component is handling searches and default topstories render
class MixContainer extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    // searchSlug exists if nested url entered in address bar
    // debugger
    let searchSlug = this.props.location.pathname.replace('/mixes', '').replace('/', '');
    // searchTerm exists if searching in HomeSearch input field (or if searchSlug exists)
    let searchTerm = this.props.location.text || searchSlug;
    if (searchTerm) {
      this.props.fetchStoriesBySearch(searchTerm);
    } else {
      this.props.fetchStories();
    }
  }

  render() {
    return (
      <>
        <Search getMix={this.props.fetchStoriesBySearch} />
        <Stories stories={this.props.stories} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return ({ stories: state.stories });
};

export default connect(mapStateToProps, { fetchStoriesBySearch, fetchStories })(MixContainer);
