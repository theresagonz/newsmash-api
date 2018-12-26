import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Mash from '../components/Mash';
import { getMashWords, getTopMashes } from '../actions/mashActions';

const PROPTYPES = {
  mash: PropTypes.shape({
    words: PropTypes.array,
    loading: PropTypes.bool,
  }),
  getMashWords: PropTypes.func,
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

  handleClick = () => {
    console.log('in handleclick, this.props :', this.props);
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.mash)
    };
    fetch('/api/v1/mashes', request)
    // .then(res => res.json())
    // .then(data => {
    //   console.log('in saveMash, data :', data);
    // })
  }

  render() {
    const slugifiedTopic = this.props.match.params.topic;
    const headline = slugifiedTopic ? `${_.startCase(_.replace(slugifiedTopic, /-/g, ' '))}` : 'Top Stories';
    return (
      <div className="mash-container main-content">
        <button className="btn btn-secondary save-button" onClick={this.handleClick}>Save this mash</button>
        <div className="headline">{headline} Mash</div>
        <div id="mash-canvas"></div>
        <Mash mash={this.props.mash} />
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
