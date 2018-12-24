import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mash from '../components/Mash';
import { getMashWords, getTopMashes } from '../actions/mashActions';

class MashContainer extends Component {
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
  console.log('state.mash.loading', state.mash.loading)
  return ({
    mash: state.mash
  });
};

export default connect(mapStateToProps, { getMashWords, getTopMashes })(MashContainer);
