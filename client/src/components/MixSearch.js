import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { slugify } from '../utils/utilities';

const PROPTYPES = {
  getMix: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

class MixSearch extends Component {
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
    this.props.getMix(this.state.text);
    this.searchRedirect();
    this.setState({
      text: ''
    });
  }

  searchRedirect = () => {
    this.props.history.push(`/mixes/${slugify(this.state.text)}`);
  }

  render() {
    return (
      // <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="search_input" >{this.props.prompt}</label>
            <input
              id="search_input"
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Mix it" />
        </form>
      // </div>
    );
  }
}

MixSearch.propTypes = PROPTYPES;

export default MixSearch;
