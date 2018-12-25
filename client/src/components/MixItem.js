import React from 'react';

const Story = props => {
  return (
    <div className="mix-item">
      {/* <a href={props.story.url}><img src={props.story.urlToImage} alt="news photo" /></a> */}
      <div className="mix-headline"><a href={props.url}>{props.headline}</a></div>
      <span className="news-source">{props.source}</span>
      <span className="news-content"> {props.description}</span>
    </div>
  );
};

export default Story;
