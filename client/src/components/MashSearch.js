import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { slugify } from '../utils/utilities';

class MashSearch extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
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
    this.props.getMashWords(this.state.text);
    
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="search_input" >{this.props.prompt}</label>
          <input
            id="search_input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        <input type="submit" className="btn btn-primary" value="Mash it" />
        </div>
      </form>
    );
  }
}

export default MashSearch;
