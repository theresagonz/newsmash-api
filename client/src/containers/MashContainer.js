import React, { Component } from 'react';
import MashSearch from '../components/MixSearch';
import Mash from '../components/Mash';

export default class MashContainer extends Component {
  render() {
    return (
      <div className="mash-container">
        <MashSearch />
        <Mash />
      </div>
    );
  }
}
