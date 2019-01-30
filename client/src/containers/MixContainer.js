import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchMix, fetchMixSearch } from '../actions/mixActions';
import Mix from '../components/Mix';
import MySidebar from './MySidebar';

const PROPTYPES = {
  fetchMix: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({ topic: PropTypes.string }),
  }),
  mix: PropTypes.shape({
    stories: PropTypes.array,
    loading: PropTypes.bool,
  }),
  fetchMixSearch: PropTypes.func,
};

class MixContainer extends Component {
  componentDidMount(prevProps) {
    this.renderMix();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.renderMix();
    }
  }

  renderMix() {
    const searchTerm = this.props.match.params.topic;
    const { fetchMixSearch, fetchMix } = this.props;

    searchTerm ? fetchMixSearch(searchTerm) : fetchMix();
  }

  render() {
    const topicSlug = this.props.match.params.topic;
    const headline = topicSlug
      ? `${_.startCase(_.replace(topicSlug, /-/g, ' '))} Mix`
      : 'Top Stories Mix';
    const mashLink = topicSlug || '';

    return (
      <div className="mix-container main-content">
      <MySidebar />
        <div className="headline">{headline}</div>
        <Mix mix={this.props.mix} />
        <Link to={`/mashes/${mashLink}`} className="toggle-button">
          Get mash
        </Link>
      </div>
    );
  }
}

MixContainer.propTypes = PROPTYPES;

const mapStateToProps = state => {
  return { mix: state.mix };
};

export default connect(
  mapStateToProps,
  { fetchMix, fetchMixSearch }
)(MixContainer);
