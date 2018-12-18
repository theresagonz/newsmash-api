import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { slugify } from '../utils/utilities';

export default class Search extends Component {
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
      redirect: true
    });
  }

  // componentWillUpdate = () => {
  //   if (this.state.redirect) {
  //     return 
  //   }
  // }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
						pathname: `/mixes/${slugify(this.state.text)}`,
						text: this.state.text
					}}
				/>
      )
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
        <input type="submit" className="btn btn-primary" value="Get headlines" />
        </div>
      </form>
    );
  }
}
