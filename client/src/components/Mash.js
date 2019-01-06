import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { core as WordMash } from 'zingchart-react';

const PROPTYPES = {
  words: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    count: PropTypes.number,
  })),
};

export default class Mash extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.words === nextProps.words);
  }
  
  render() {
    const mashConfig = {
      type: 'wordcloud',
      options: {
        words: this.props.words,
        maxFontSize: 500,
        minFontSize: 10,
        width: '100%',
        height: '100%',
        // dataurl: 'resources/cachedchart.json',
        cache:{
          data: true,
        },
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
    console.log('in Mash.js, this.props :', this.props);
    
    return (
      <div>
        <WordMash
          id="mash-canvas"
          height="400"
          width="100%"
          data={mashConfig}
        />
      </div>
    );
  }
}

Mash.propTypes = PROPTYPES;
