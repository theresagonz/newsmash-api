import React from 'react';
import Story from './Story';

const Stories = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
        {props.stories.map(story => (
          <Story story={story} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Stories;
