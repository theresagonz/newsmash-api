import React from 'react';
import Story from './Story';

const Stories = props => {
  let stories = !!props.stories.array.length ? props.stories.array : null;
  // debugger
  return (
    <div>
      {/* <h2>Mix about {props.location.text}</h2> */}
      {
        stories && (
          stories.map(story => {
            return (
              <Story
                key={story.url}
                headline={story.title}
                source={story.name}
                description={story.description}
                url={story.url}
              />
            );
          })
        )
      }
    </div>
  );
};

export default Stories;
