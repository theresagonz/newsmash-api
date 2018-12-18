import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      redirect: false
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // debugger
    this.props.getStories(this.state.text);
    this.setState({
      redirect: true
    })
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect === true) {
      return (<Redirect to={{
        pathname: '/news',
        text: this.state.text
    }} />)
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="search_input">{this.props.prompt}</label>
          <input
            id="search_input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            className="form-control"
          />
        <input type="submit" className="btn btn-primary" value="Get headlines" />
        </div>
      </form>
    )
  }
}
