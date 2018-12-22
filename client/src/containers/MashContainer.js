import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mash from '../components/Mash';
import { getMashWords } from '../actions/mashActions';

class MashContainer extends Component {

  render() {
    return (
      <div className="mash-container main-content">
        <Mash />
      </div>
    );
  }
}

export default connect(null, { getMashWords })(MashContainer);
