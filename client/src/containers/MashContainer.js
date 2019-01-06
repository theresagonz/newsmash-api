import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import { getMashWords, getTopMashes, saveMash, getSavedMash, setTopic } from '../actions/mashActions';

const PROPTYPES = {
  mash: PropTypes.shape({
    id: PropTypes.number,
    words: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      count: PropTypes.number,
    })),
    loadingNew: PropTypes.bool,
    topic: PropTypes.string,
    loadingSaved: PropTypes.bool,
    saving: PropTypes.bool,
    recentMashes: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      count: PropTypes.number,
    }))
  }),
  getMashWords: PropTypes.func,
  getTopMashes: PropTypes.func,
  saveMash: PropTypes.func,
  getSavedMash: PropTypes.func,
  setTopic: PropTypes.func,
};

class MashContainer extends Component {

  async updateRenderedMash(prevProps) {
    const searchTerm = this.props.match.params.topic;
    const mashId = this.props.match.params.id;

    if (searchTerm) {
      this.props.setTopic(searchTerm);
      this.props.getMashWords(searchTerm);
    } else if (mashId) {
      const recentMash = this.props.mash.recentMashes.find(mash => mash.id === parseInt(mashId));
      const topic = recentMash ? recentMash.topic : 'Loading saved';
      this.props.setTopic(topic);
      await this.props.getSavedMash(mashId);
    } else {
      this.props.setTopic('Top Stories');
      this.props.getTopMashes();
    }
  }

  componentDidMount(prevProps) {
    this.updateRenderedMash(prevProps);
  }
    
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.updateRenderedMash(prevProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.mash.words === nextProps.mash.words
      && this.props.mash.topic === nextProps.mash.topic
      && this.props.match.url === nextProps.match.url);
  }

  handleClick = async() => {
    await this.props.saveMash(this.props.mash);
    this.savedMashRedirect(this.props.mash.recentMashes[0].id);
  }

  savedMashRedirect = (id) => {
    this.props.history.push(`/mashes/saved/${id}`);
  }

  render() {
    const { loadingNew, loadingSaved, words, topic } = this.props.mash;
    // debugger;
    // if loading saved mash, display 'saved', otherwise display save link
    const saveButton = this.props.match.params.id ?
      (
        <div className="heart-shape saved-label">&hearts; Saved</div>
      ) :
      (
        <div className="heart-shape save-button hover-div" onClick={this.handleClick}>&hearts; Save</div>
      );
    const topicTitleCase = `${_.startCase(_.replace(topic, /-/g, ' '))} Mash`;
    let loadingMessage;
    if (loadingNew) {
      loadingMessage = 'Mashing up the news...';
    } else if (loadingSaved) {
      loadingMessage = 'Please wait...';
    }
    const mashDisplay = loadingMessage ?
      (
        <div className="loading-message">{ loadingMessage }</div>
      ) : 
      (
      <Mash
        words={words}
        />
      );

    return (
      <div className="mash-container main-content">
        { saveButton }
        <div className="headline">{ topicTitleCase }</div>
        { mashDisplay }
        <div id="mash-canvas"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ mash: state.mash });
};

MashContainer.propTypes = PROPTYPES;

export default connect(mapStateToProps, { getMashWords, getTopMashes, saveMash, getSavedMash, setTopic })(MashContainer);
