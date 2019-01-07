import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import {
  getMashWords,
  getTopMash,
  saveMash,
  getSavedMash,
  setTopic,
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
};

class MashContainer extends Component {
  updateRenderedMash() {
    const { topic, id } = this.props.match.params;
    const { getMashWords, getSavedMash, getTopMash, setTopic } = this.props;
    const { recentMashes } = this.props.mash;

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

  // Working on preventing rerender on save

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(this.props.mash.words === nextProps.mash.words
  //     && this.props.mash.topic === nextProps.mash.topic
  //     && this.props.location.pathname === nextProps.location.pathname
  // }

  handleClick = async () => {
    const { mash, saveMash, history } = this.props;
    await saveMash(mash);
    history.push(`/mashes/saved/${this.props.recentMashes[0].id}`);
  };

  render() {
    const {
      loadingNew,
      loadingSaved,
      saving,
      words,
      topic,
      error,
    } = this.props.mash;
    const { id } = this.props.match.params;

    let saveElement;
    if (saving) {
      saveElement = (
        <div className="heart-shape saving-label">&hearts; Saving</div>
      );
    } else if (id) {
      saveElement = (
        <div className="heart-shape saved-label">&hearts; Saved</div>
      );
    } else {
      saveElement = (
        <div
          className="heart-shape save-button hover-div"
          onClick={this.handleClick}
        >
          &hearts; Save
        </div>
      );
    }

    let loadingMessage;
    if (loadingNew) {
      loadingMessage = 'Mashing up the news...';
    } else if (loadingSaved) {
      loadingMessage = 'Please wait...';
    } else if (error) {
      loadingMessage = 'Hmmm, nothing found. Try searching again.';
    }

    const mashDisplay = loadingMessage ? (
      <div className="loading-message">{loadingMessage}</div>
    ) : (
      <Mash words={words} />
    );

    const topicTitleCase = `${_.startCase(_.replace(topic, /-/g, ' '))} Mash`;

    return (
      <div className="mash-container main-content">
        {saveElement}
        <div className="headline">{topicTitleCase}</div>
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
  { getMashWords, getTopMash, saveMash, getSavedMash, setTopic }
)(MashContainer);
