import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import { getMashWords, getTopMashes, saveMash, getSavedMash } from '../actions/mashActions';

const PROPTYPES = {
  mash: PropTypes.shape({
    id: PropTypes.number,
    words: PropTypes.array,
    loading: PropTypes.bool,
    saving: PropTypes.bool,
    topic: PropTypes.string,
    recentMashes: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      count: PropTypes.number,
    }))
  }),
  getMashWords: PropTypes.func,
  getTopMashes: PropTypes.func,
  saveMash: PropTypes.func,
  getSavedMash: PropTypes.func,
};

class MashContainer extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
    };
  }
  updateRenderedMash(prevProps) {
    const searchTerm = this.props.match.params.topic;
    const mashId = this.props.match.params.id;

    if (searchTerm) {
      this.setState({ topic: searchTerm });
      this.props.getMashWords(searchTerm);
    } else if (mashId) {
      this.setState({ topic: 'Loading saved' });
      this.props.getSavedMash(mashId);
      this.setState({ topic: this.props.mash.topic})
    } else {
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

  handleClick = () => {
    console.log('in handleclick, this.props.mash :', this.props.mash);
    console.log('this.props.mash.recentMashes[0].id :', this.props.mash.recentMashes[0].id);
    this.props.saveMash(this.props.mash);
    this.savedMashRedirect(this.props.mash.recentMashes[0].id + 1);
  }

  savedMashRedirect = (id) => {
    this.props.history.push(`/mashes/saved/${id}`);
  }

  render() {
    const { loading, loadingSaved, words, topic } = this.props.mash;
    
    const saveButton = this.props.match.params.id ?
    (
      <div className="heart-shape saved-label">&hearts; Saved</div>
    ) :
    (
      <div className="heart-shape save-button hoverDiv" onClick={this.handleClick}>&hearts; Save</div>
    );

    return (
      <div className="mash-container main-content">
        { saveButton }  
        <Mash
          loading={loading}
          loadingSaved={loadingSaved}
          words={words}
          topic={topic || this.state.topic }
          />
        <div id="mash-canvas"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ mash: state.mash });
};

MashContainer.propTypes = PROPTYPES;

export default connect(mapStateToProps, { getMashWords, getTopMashes, saveMash, getSavedMash })(MashContainer);
