import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Mash from '../components/Mash';
import SaveElement from '../components/SaveElement';
import LoadingSpinner from '../components/LoadingSpinner';
import MySidebar from './MySidebar';
import {
  getMashWords,
  getTopMash,
  getRecentMashes,
  saveMash,
  getOlderSavedMash,
  setSaved,
  setRecentMash,
} from '../actions/mashActions';

const PROPTYPES = {
  mash: PropTypes.shape({
    id: PropTypes.number,
    words: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        count: PropTypes.number,
      })
    ),
    topic: PropTypes.string,
    loading: PropTypes.bool,
    saving: PropTypes.bool,
    saved: PropTypes.bool,
    error: PropTypes.bool,
    recentMashes: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        count: PropTypes.number,
      })
    ),
  }),
  getMashWords: PropTypes.func,
  getTopMash: PropTypes.func,
  getRecentMashes: PropTypes.func,
  saveMash: PropTypes.func,
  getOlderSavedMash: PropTypes.func,
  setRecentMash: PropTypes.func,
  setSaved: PropTypes.func,
};

class MashContainer extends Component {
  componentDidMount() {
    this.renderMash();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.renderMash();
    }
  }

  renderMash() {
    const { topic, id } = this.props.match.params;
    const { getTopMash, getMashWords } = this.props;

    if (topic) {
      getMashWords(topic);
    } else if (id) {
      this.getMashById(id);
    } else {
      getTopMash();
    }
  }

  async getMashById(id) {
    await this.props.getRecentMashes();

    const { recentMashes, setRecentMash, getOlderSavedMash } = this.props;
    const recentMash = recentMashes.find(mash => mash.id === parseInt(id));

    if (recentMash) {
      setRecentMash(recentMash);
    } else {
      getOlderSavedMash(id);
    }
  }

  render() {
    const { topic, words, loading, saving, saved, error } = this.props.mash;
    const { id } = this.props.match.params;
    const { mash, recentMashes, saveMash, setSaved } = this.props;

    const topicTitleCase = topic
      ? `${_.startCase(_.replace(topic, /-/g, ' '))} Mash`
      : 'Just a moment...';

    let mashDisplay;
    if (loading) {
      mashDisplay = <LoadingSpinner />;
    } else if (error) {
      mashDisplay = (
        <div className="loading-message">
          Something is amiss. Please try again.
        </div>
      );
    } else {
      mashDisplay = <Mash words={words} />;
    }

    let mixLink;
    if (this.props.match.params.topic) {
      mixLink = this.props.match.params.topic;
    } else if (topic === 'top stories') {
      mixLink = '';
    } else if (saved) {
      mixLink = _.kebabCase(topic);
    } else {
      mixLink = '';
    }
    
    return (
      <div className="mash-container main-content">
        <MySidebar />
        <div className="headline">{topicTitleCase}</div>
        <SaveElement
          {...{ id, mash, saving, saved, saveMash, setSaved, recentMashes }}
        />
        <Link
          to={`/mixes/${mixLink}`}
          className="toggle-button"
        >
          Get mix
        </Link>
        {mashDisplay}
        <div id="mash-canvas" />
      </div>
    );
  }
}

MashContainer.propTypes = PROPTYPES;

const mapStateToProps = state => {
  return { mash: state.mash, recentMashes: state.mash.recentMashes };
};

export default connect(
  mapStateToProps,
  {
    getMashWords,
    getTopMash,
    getRecentMashes,
    saveMash,
    getOlderSavedMash,
    setRecentMash,
    setSaved,
  }
)(MashContainer);
