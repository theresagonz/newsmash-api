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
    // searchTerm exists if input from HomeSearch
    // or if nested url entered directly in address bar
    const searchTerm = this.props.location.text || this.props.match.params.topic;
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
