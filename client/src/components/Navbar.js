import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Search from '../containers/Search';
import { fetchMixSearch } from '../actions/mixActions';
import { getMashWords } from '../actions/mashActions';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark navbar-container">
          <div className="navbar-item">
            <img src="/logo-white.png" alt="newsmash-logo" />
          </div>
          <div className="navbar-item">
            <Search
              fetchMixSearch={this.props.fetchMixSearch}
              fetchMashSearch={this.props.getMashWords}
              history={this.props.history}
            />
          </div>
        </nav>
      </div>
    );
  }
};

export default connect(null, { fetchMixSearch, getMashWords })(Navbar);
