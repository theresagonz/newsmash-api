import React from 'react';
import MixItem from './MixItem';

const Stories = props => {
  let stories = !!props.mix.data.length ? props.mix.data : null;
  return (
    <div>
      {/* <h2>Mix about {props.location.text}</h2> */}
      {
        stories && (
          stories.map(story => {
            return (
              <MixItem
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
