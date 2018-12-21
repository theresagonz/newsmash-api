import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { slugify } from '../utils/utilities';

class MixSearch extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      redirect: false
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
    this.setState({
      redirect: true,
      text: ''
    });
  }

  searchRedirect = () => {
    return (
      <Redirect
        to={{
          pathname: `/mixes/${slugify(this.state.text)}`,
          text: this.state.text
        }}
      />
    );
  }

  render() {
    if (this.state.redirect) {
      debugger
      this.setState({
        redirect: false
      });
      this.searchRedirect();
    }
          
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
        <input type="submit" className="btn btn-primary" value="Mix it" />
        </div>
      </form>
    );
  }
}

export default MixSearch;
