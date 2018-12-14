import React from 'react';

const Story = props => {
  return (
    <div >
      {/* <a href={props.story.url}><img src={props.story.urlToImage} alt="news photo" /></a> */}
      <a href={props.story.url}><h5>{props.story.title}</h5></a>
      <p>{props.story.source.name}</p>
      <p>{props.story.description} </p>
    </div>
  )
}

export default Story;
