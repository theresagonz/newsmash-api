import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { core as WordMash } from 'zingchart-react';

const PROPTYPES = {
  topic: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    count: PropTypes.number,
  })),
  loading: PropTypes.bool,
};

export default class Mash extends Component {
  render() {
    const { loading, words, topic } = this.props;
    console.log('in Mash.js, words', words)
    const mashConfig = {
      type: 'wordcloud',
      options: {
        words: words,
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
    console.log('in Mash.js, this.props :', this.props);
    const headline = topic ? (
        `${_.startCase(_.replace(topic, /-/g, ' '))}`
      ) :
      (
        'Top Stories'
      );
    
    return (
      <div>
        <div className="headline">{ headline } Mash</div>
          { loading ?
            (
              <div className="loading-message">Mashing up the news...</div>
            ) :
            (
              <div>
                <WordMash
                  id="mash-canvas"
                  height="400"
                  width="100%"
                  data={mashConfig}
                />
              </div>
            )
          }
      </div>
    );
  }
}

Mash.propTypes = PROPTYPES;
