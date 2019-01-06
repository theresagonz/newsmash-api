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
      this.setState({ topic: 'Top Stories'});
      await this.props.getTopMashes();
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

  handleClick = async() => {
    this.props.saveMash(this.props.mash);
    this.savedMashRedirect(this.props.mash.recentMashes[0].id );
  }

  savedMashRedirect = (id) => {
    this.props.history.push(`/mashes/saved/${id}`);
  }

  render() {
    const { loadingNew, loadingSaved, words, topic } = this.props.mash;
    // if loading saved mash, display 'saved', otherwise display save link
    const saveButton   = this.props.match.params.id ?
    (
      <div className="heart-shape saved-label">&hearts; Saved</div>
    ) :
    (
      <div className="heart-shape save-button hover-div" onClick={this.handleClick}>&hearts; Save</div>
    );
    const topicTitleCase = `${_.startCase(_.replace(topic, /-/g, ' '))} Mash`;
    const loadingMessage = loadingNew || loadingSaved ? 'Mashing up the news...' : '';
    return (
      <div className="mash-container main-content">
        { saveButton }
        <div className="headline">{ topicTitleCase }</div>
          { loadingMessage ?
            (
              <div className="loading-message">{ loadingMessage }</div>
            ) : 
            <Mash
              words={words}
              />
          }
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
