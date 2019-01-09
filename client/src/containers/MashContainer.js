import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SaveElement from '../components/SaveElement';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import {
  getMashWords,
  getTopMash,
  saveMash,
  getSavedMash,
  setTopic,
  setSaved,
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
    loadingNew: PropTypes.bool,
    topic: PropTypes.string,
    loadingSaved: PropTypes.bool,
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
  saveMash: PropTypes.func,
  getSavedMash: PropTypes.func,
  setTopic: PropTypes.func,
  setSaved: PropTypes.func,
};

class MashContainer extends Component {
  updateRenderedMash() {
    const { topic, id } = this.props.match.params;
    const { recentMashes } = this.props.mash;
    const { getMashWords, getSavedMash, getTopMash, setTopic } = this.props;

    if (topic) {
      setTopic(topic);
      getMashWords(topic);
    } else if (id) {
      const recentMash = recentMashes.find(mash => mash.id === parseInt(id));
      const topic = recentMash ? recentMash.topic : 'Loading saved';
      setTopic(topic);
      getSavedMash(id);
    } else {
      setTopic('Top Stories');
      getTopMash();
    }
  }

  componentDidMount() {
    this.updateRenderedMash();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.updateRenderedMash();
    }
  }

  render() {
    const {
      loadingNew,
      loadingSaved,
      saving,
      words,
      topic,
      error,
      saved,
    } = this.props.mash;
    const { id } = this.props.match.params;
    const { mash, recentMashes, saveMash, history, setSaved } = this.props;
    
    const topicTitleCase = `${_.startCase(_.replace(topic, /-/g, ' '))} Mash`;
    
    let loadingMessage;
    if (loadingNew) {
      loadingMessage = 'Mashing up the news...';
    } else if (loadingSaved) {
      loadingMessage = 'Please wait...';
    } else if (error) {
      loadingMessage = 'Something is amiss. Please try again.';
    }

    const mashDisplay = loadingMessage ? (
      <div className="loading-message">{loadingMessage}</div>
    ) : (
      <Mash
        {...{ topic, words, saving, id, mash, saveMash, history, recentMashes }}
      />
    );

    return (
      <div className="mash-container main-content">
        <div className="headline">{topicTitleCase}</div>
        <SaveElement
          saving={saving}
          id={id}
          mash={mash}
          saveMash={saveMash}
          setSaved={setSaved}
          saved={saved}
          recentMashes={recentMashes}
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
  { getMashWords, getTopMash, saveMash, getSavedMash, setTopic, setSaved }
)(MashContainer);
