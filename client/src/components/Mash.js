import React, { Component } from 'react';
import { core as WordMash } from 'zingchart-react';

export default class Mash extends Component {
  render() {
    const mashConfig = {
      type: 'wordcloud',
      options: {
        'words': this.props.mash.words
      }
    };
    console.log('this.props.mash.loading :', this.props.mash.loading);
    return (
      <div>
        <h1>It's a mash!</h1>
        {this.props.mash.loading ? (
          <div className="loading-message">Mashing it up...</div>
        ) : (
        <WordMash
          id="mash-canvas"
          height="300"
          width="100%"
          data={mashConfig}
        />
        )}
      </div>
    );
  }
}
