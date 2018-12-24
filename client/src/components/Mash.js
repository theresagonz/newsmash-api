import React, { Component } from 'react';
import { core as ZingChart } from 'zingchart-react';

const mashConfig = {
  type: 'wordcloud',
  options: {
    text: 'We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.',
  }
};

export default class Mash extends Component {
  render() {
    return (
      <div id="mash-container">
        <h1>It's a mash!</h1>
        <ZingChart
          id="mash-canvas"
          height="300"
          width="100%"
          data={mashConfig}
        />
      </div>
    );
  }
}
