import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { slugify } from '../utils/utilities';

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
    debugger
    this.props.getContent(this.state.text);
    this.searchRedirect();
    this.setState({
      text: ''
    });
  }

  searchRedirect = () => {
    const path = this.props.searchType + 'es'
    this.props.history.push(`/${path}/${slugify(this.state.text)}`);
  }

  render() {
    return (
      // <div className="search-container">
        <form className="sidebar-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="search-prompt" htmlFor="search_input" >Get a {this.props.searchType}</label>
            <input
              id="search_input"
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <input type="submit" className="btn btn-primary" value={`${_.capitalize(this.props.searchType)} it`} />
        </form>
      // </div>
    );
  }
}

Search.propTypes = PROPTYPES;

export default Search;
