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
        aspect: 'spiral',
        maxFontSize: 500,
        minFontSize: 10,
        style: {
          fontFamily: 'Zilla Slab',
          hoverState: {
            backgroundColor: 'white',
            borderColor: 0,
            fontColor: 'black',
            textAlpha: 1,
          }
        },
        colorType: 'palette',
        palette: ['#2196F3','#3F51B5','#42A5F5','#5C6BC0','#64B5F6','#7986CB','#90CAF9','#9FA8DA','#BBDEFB','#C5CAE9']
      }
    };
    console.log('this.props.mash.loading :', this.props.mash.loading);
    return (
      <div>
        {this.props.mash.loading ? (
          <div className="loading-message">Mashing up the news...</div>
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
