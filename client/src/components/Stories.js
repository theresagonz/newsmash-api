import React from 'react';
import Story from './Story';

const Stories = props => {
  // console.log('props.stories', props.stories)
  return (
    <div>
      {props.stories.map(story => (
        <Story story={story} />
      ))}
    </div>
  )
}

export default Stories;
