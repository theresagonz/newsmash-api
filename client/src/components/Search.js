import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchHeadlines(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label for="search_input">Search headlines</label>
          <input
            id="search_input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            className="form-control"
          />
          <button type="button" className="btn btn-primary" >Submit</button>
        </div>
      </form>
    )
  }
}
