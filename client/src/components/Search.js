import React, { Component } from 'react';

export default class Search extends Component {
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
    this.props.getMix(this.state.text);
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
            // className="form-control"
          />
        <input type="submit" className="btn btn-primary" value="Get headlines" />
        </div>
      </form>
    );
  }
}
