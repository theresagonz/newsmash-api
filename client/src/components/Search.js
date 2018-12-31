import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';

const PROPTYPES = {
  getContent: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // sets store state using search data in local component state
    this.props.getContent(this.state.text);
    this.searchRedirect();
  
  }

  handleMashRequest = () => {
    this.props.history.push(`/mashes/${_.kebabCase(this.state.text)}`);
    this.setState({
      text: ''
    });
  }

  handleMixRequest = () => {
    this.props.history.push(`/mixes/${_.kebabCase(this.state.text)}`);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="sidebar-container">
        <div className="form-group">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value={'Mash it'}
          onClick={this.handleMashRequest}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value={'Mix it'}
          onClick={this.handleMixRequest}
        />
      </div>
    );
  }
}

Search.propTypes = PROPTYPES;

export default Search;
