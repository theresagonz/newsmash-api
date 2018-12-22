import React from 'react';
import MixItem from './MixItem';

const Stories = props => {
  console.log('props.mix', props.mix);
  const stories = !!props.mix.data.length ? props.mix.data : null;
  const content = props.mix.loading
    ? <div>Mixing it up...</div>
    : (stories && (
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
  );
  return (
    <div>
      { content }
    </div>
  );
};

export default Stories;
