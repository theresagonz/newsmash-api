import React, { Component } from 'react';

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

  render() {
    return (
      <form>
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
