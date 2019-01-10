import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import SaveElement from '../components/SaveElement';
import LoadingSpinner from '../components/LoadingSpinner';
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
    this.updateRenderedMash();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.updateRenderedMash();
    }
  }

  updateRenderedMash() {
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
    const {
      topic,
      words,
      loading,
      saving,
      saved,
      error,
    } = this.props.mash;
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

    return (
      <div className="mash-container main-content">
        <div className="headline">{topicTitleCase}</div>
        <SaveElement
          {...{ id, mash, saving, saved, saveMash, setSaved, recentMashes }}
        />
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
