import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
      text: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleMashRequest = () => {
    this.props.history.push(`/mashes/${_.kebabCase(this.state.text)}`);
    this.setState({
      text: '',
    });
  };

  handleMixRequest = () => {
    this.props.history.push(`/mixes/${_.kebabCase(this.state.text)}`);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
              className="form-control mr-sm-2"
              autoFocus
            />
          </div>
          <input
            type="submit"
            className="btn btn-secondary mr-sm-2"
            value={'Mix it'}
            onClick={this.handleMixRequest}
          />
          <input
            type="submit"
            className="btn btn-secondary"
            value={'Mash it'}
            onClick={this.handleMashRequest}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = PROPTYPES;

export default Search;
