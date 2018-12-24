import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mash from '../components/Mash';
import { getMashWords, getTopMashes } from '../actions/mashActions';

const PROPTYPES = {
  mash: PropTypes.shape({
    words: PropTypes.array,
    loading: PropTypes.bool,
  }),
  getTopWords: PropTypes.func,
  getTopMashes: PropTypes.func,
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

  render() {
    return (
      <div className="mash-container main-content">
        <Mash mash={this.props.mash} />
        <div id="mash-canvas"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    mash: state.mash
  });
};

export default connect(mapStateToProps, { getMashWords, getTopMashes })(MashContainer);
