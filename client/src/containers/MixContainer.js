import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import Search from '../components/Search';
import { getStoriesAndUpdateStore, searchStoriesAndUpdateStore } from '../actions/storiesActions';
import Stories from '../components/Stories';

// this component is handling searches and default topstories render
class MixContainer extends Component {
  constructor() {
    super();

    
    this.state = {
      searchTerm: ''
    };
  }

  componentDidMount() {

    const { match, location, history } = this.props;
    // console.log('match params topic', match.params.topic)
    // searchTerm exists if input is from HomeSearch
    // or if nested url entered directly in address bar
    if (location.pathname !== '/mixes') {
      this.setState({
        searchTerm: location.pathname.replace('/mixes/', '')
      });
      this.props.searchStoriesAndUpdateStore(this.state.searchTerm);
      history.push({
        pathname: `/mixes/${this.state.searchTerm}`
      });
    } else {
      this.props.getStoriesAndUpdateStore();
    }
    // debugger

    // hashHistory.push({
    //   pathname:"/url-url",
  
    // });

  }

  render() {
    // const { match, location, history } = this.props;
    // // console.log('match params topic', match.params.topic)
    // // searchTerm exists if input is from HomeSearch
    // // or if nested url entered directly in address bar
    // let searchTerm;
    // if (location.pathname !== '/mixes') {
    //   searchTerm = location.pathname.replace('/mixes/', '');
    // }
    // // let searchTerm = location.text || match.params.topic;
    // console.log('searchTerm', searchTerm)
    // debugger
    // if (searchTerm) {
    //   this.props.searchStoriesAndUpdateStore(searchTerm);
    // } else {
    //   this.props.getStoriesAndUpdateStore();
    // }
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
