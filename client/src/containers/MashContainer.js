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
  componentDidMount(prevProps) {
    const searchTerm = this.props.match.params.topic;
    const mashId = this.props.match.params.id;

    if (searchTerm) {
      this.props.getMashWords(searchTerm);
    } else if (mashId) {
      this.props.getSavedMash(mashId);
    } else {
      this.props.getTopMashes();
    }
  }

  componentDidUpdate(prevProps) {
    // if (this.props.location.pathname !== prevProps.location.pathname) {
    //   const searchTerm = this.props.match.params.topic;
    //   if (searchTerm) {
    //     this.props.getMashWords(searchTerm);
    //   } else {
    //     this.props.getTopMashes();
    //   }
    // }
  }

  handleClick = () => {
    console.log('in handleclick, this.props.mash :', this.props.mash);
    this.props.saveMash(this.props.mash);
  }

  render() {
    const { loading, saving, words, topic } = this.props.mash;
    
    return (
      <div className="mash-container main-content">
        <div className="heart-shape save-button hoverDiv" onClick={this.handleClick}>&hearts; Save</div>
        <Mash
          loading={loading}
          saving={saving}
          words={words}
          topic={topic}
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
