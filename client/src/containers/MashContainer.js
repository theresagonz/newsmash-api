import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import { getMashWords, getTopMashes, saveMash } from '../actions/mashActions';

const PROPTYPES = {
  mash: PropTypes.shape({
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
};

class MashContainer extends Component {
  componentDidMount(prevProps) {
    const searchTerm = this.props.match.params.topic;
    if (searchTerm) {
      this.props.getMashWords(searchTerm);
    } else {
      this.props.getTopMashes();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const searchTerm = this.props.match.params.topic;
      if (searchTerm) {
        this.props.getMashWords(searchTerm);
      } else {
        this.props.getTopMashes();
      }
    }
  }

  handleClick = () => {
    console.log('in handleclick, this.props.mash :', this.props.mash);
    this.props.saveMash(this.props.mash);
  }

  render() {
    // const { loading, saving, words, topic } = this.props;
    const slugifiedTopic = this.props.match.params.topic;
    const headline = slugifiedTopic ? `${_.startCase(_.replace(slugifiedTopic, /-/g, ' '))}` : 'Top Stories';
    return (
      <div className="mash-container main-content">
        <div className="headline">{headline} Mash</div>
        <div className="heart-shape save-button hoverDiv" onClick={this.handleClick}>&hearts; Save</div>
        <div id="mash-canvas"></div>
        <Mash
          loading={this.props.mash.loading}
          saving={this.props.mash.saving}
          words={this.props.mash.words}
          topic={this.props.mash.topic}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ mash: state.mash });
};

MashContainer.propTypes = PROPTYPES;

export default connect(mapStateToProps, { getMashWords, getTopMashes, saveMash })(MashContainer);
