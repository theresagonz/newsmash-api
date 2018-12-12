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
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }
}
