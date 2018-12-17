import React from 'react';
import Story from './Story';

const Stories = props => {
  let stories = !!props.stories.array.length ? props.stories.array : null;

  return (
    <div>
      {
        stories && (
          stories.map(story => {
            return (
              <Story key={story.url} headline={story.title} source={story.name} description={story.description} url={story.url} />
            )
          })
        )
      }
    </div>
  )
}

export default Stories;
