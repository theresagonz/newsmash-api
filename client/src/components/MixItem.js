import React from 'react';

const Story = props => {
  return (
    <div>
      {/* <a href={props.story.url}><img src={props.story.urlToImage} alt="news photo" /></a> */}
      <h5><a href={props.url}>{props.headline}</a></h5>
      <p>{props.source}</p>
      <p>{props.description} </p>
    </div>
  );
};

export default Story;
