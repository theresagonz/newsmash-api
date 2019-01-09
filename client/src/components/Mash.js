import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { core as WordMash } from 'zingchart-react';

const PROPTYPES = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      count: PropTypes.number,
    })
  ),
};

export default class Mash extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   debugger;
  //   return !(nextProps.words === this.props.words);
  // }

  render() {
    const { saving, id } = this.props;
    const mashConfig = {
      type: 'wordcloud',
      options: {
        words: this.props.words,
        stepRadius: 65,
        stepAngle: 10,
        width: '100%',
        height: '100%',
        // dataurl: 'resources/cachedchart.json',
        cache: {
          data: true,
        },
        style: {
          fontFamily: 'Zilla Slab',
          hoverState: {
            backgroundColor: 'white',
            borderColor: 0,
            fontColor: 'black',
            textAlpha: 1,
          },
        },
        colorType: 'palette',
        palette: [
          '#2196F3',
          '#3F51B5',
          '#42A5F5',
          '#5C6BC0',
          '#64B5F6',
          '#7986CB',
          '#90CAF9',
          '#9FA8DA',
          '#BBDEFB',
          '#C5CAE9',
        ],
      },
    };

    const handleClick = async () => {
      const { mash, saveMash, history } = this.props;
      await saveMash(mash);
      history.push(`/mashes/saved/${this.props.recentMashes[0].id}`);
    };

    let saveElement;
    if (saving) {
      saveElement = (
        <div className="heart-shape saving-label">&hearts; Saving</div>
      );
    } else if (id) {
      saveElement = (
        <div className="heart-shape saved-label">&hearts; Saved</div>
      );
    } else {
      saveElement = (
        <div className="heart-shape save-button hover-div" onClick={handleClick}>
          &hearts; Save
        </div>
      );
    }

    return (
      <div>
        {saveElement}
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
