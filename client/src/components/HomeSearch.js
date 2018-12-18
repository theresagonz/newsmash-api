import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    // debugger
    this.props.getMix(this.state.text);
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect === true) {
      const slugify = string => {
        const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        const p = new RegExp(a.split('').join('|'), 'g');
        return string.toString().toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
          .replace(/&/g, '-and-') // Replace & with ‘and’
          .replace(/[^\w\-]+/g, '') // Remove all non-word characters
          .replace(/\-\-+/g, '-') // Replace multiple — with single -
          .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
        };
      
      return (
        <Redirect to={{
          pathname: `/mixes/${slugify(this.state.text)}`,
          text: this.state.text
        }} />
      );
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
    );
  }
}
