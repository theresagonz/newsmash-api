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
    this.setState({
      text: ''
    });
  }

  searchRedirect = () => {
    const path = this.props.searchType + 'es';
    const { history } = this.props;
    history.push(`/${path}/${_.kebabCase(this.state.text)}`);
    // this.props.history.replace({`/${path}` })
  }

  render() {
    return (
      <div className="sidebar-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label
              className="sidebar-heading"
              htmlFor="search_input" >Get a {this.props.searchType}
            </label>
            <input
              id="search_label"
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value={`${_.capitalize(this.props.searchType)} it`}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = PROPTYPES;

export default Search;
