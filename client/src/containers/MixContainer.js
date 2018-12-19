import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { getStoriesAndUpdateStore, searchStoriesAndUpdateStore } from '../actions/storiesActions';
import Stories from '../components/Stories';

// this component is handling searches and default topstories render
class MixContainer extends Component {
  constructor() {
    super();

    // this.state = {
    //   redirect: false
    // };
  }

  componentDidMount() {
    // searchTerm exists if input is from HomeSearch
    // or if nested url entered directly in address bar
    let searchTerm = this.props.location.text || this.props.match.params.topic;
    console.log('searchTerm', searchTerm)
    if (searchTerm) {
      this.props.searchStoriesAndUpdateStore(searchTerm);
    } else {
      this.props.getStoriesAndUpdateStore();
    }
  }

  render() {
    return (
      <div className="mix-container">
        <Search searchStoriesAndUpdateStore={this.props.searchStoriesAndUpdateStore}  />
        <Stories stories={this.props.stories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ stories: state.stories });
};

export default connect(mapStateToProps, { getStoriesAndUpdateStore, searchStoriesAndUpdateStore })(MixContainer);
