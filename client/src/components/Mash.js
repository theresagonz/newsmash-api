import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { core as WordMash } from 'zingchart-react';

const PROPTYPES = {
  mash: PropTypes.shape({
    words: PropTypes.array,
    loading: PropTypes.bool,
  })
};

export default class Mash extends Component {
  render() {
    const mashConfig = {
      type: 'wordcloud',
      options: {
        words: this.props.mash.words,
        style: {
          fontFamily: 'Impact',
          hoverState: {
            backgroundColor: 'white',
            borderColor: 0,
            fontColor: 'black',
            textAlpha: 1,
          }
        }
      }
    };
    console.log('this.props.mash.loading :', this.props.mash.loading);
    return (
      <div>
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
