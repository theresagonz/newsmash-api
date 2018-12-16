import React from 'react';

const Story = props => {
  return (
    <div>
      {/* <a href={props.story.url}><img src={props.story.urlToImage} alt="news photo" /></a> */}
      <a href={props.url}><h5>{props.headline}</h5></a>
      <p>{props.source}</p>
      <p>{props.description} </p>
    </div>
  )
}

export default Story;
