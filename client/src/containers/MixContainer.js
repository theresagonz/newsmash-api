import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MixSearch from '../components/MixSearch';
import { getStoriesAndUpdateStore, searchStoriesAndUpdateStore } from '../actions/mixActions';
import Mix from '../components/Mix';

const PROPTYPES = {
  getStoriesAndUpdateStore: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({ topic: PropTypes.string }),
  }),
  mix: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
  }), 
  searchStoriesAndUpdateStore: PropTypes.func,
};

class MixContainer extends Component {
  componentDidMount(prevProps) {
    const searchTerm = this.props.match.params.topic;
    if (searchTerm) {
      this.props.searchStoriesAndUpdateStore(searchTerm);
    } else {
      this.props.getStoriesAndUpdateStore();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const searchTerm = this.props.match.params.topic;
      if (searchTerm) {
        this.props.searchStoriesAndUpdateStore(searchTerm);
      } else {
        this.props.getStoriesAndUpdateStore();
      }
    }
  }

  render() {
    const slugifiedTopic = this.props.match.params.topic;
    const headline = slugifiedTopic ? `${_.startCase(_.replace(slugifiedTopic, /-/g, ' '))} Mix` : 'Top Stories Mix';
    return (
      <div className="mix-container main-content">
        <div className="headline">
          {headline}</div>
        <Mix mix={this.props.mix} />
      </div>
    );
  }
}

MixContainer.propTypes = PROPTYPES;

const mapStateToProps = state => {
  return ({ mix: state.mix });
};

export default connect(mapStateToProps, { getStoriesAndUpdateStore, searchStoriesAndUpdateStore })(MixContainer);
