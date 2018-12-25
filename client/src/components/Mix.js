import React from 'react';
import MixItem from './MixItem';

const Stories = props => {
  console.log('props.mix', props.mix);
  const stories = !!props.mix.data.length ? props.mix.data : null;
  const content = props.mix.loading
    ? <div className="loading-message">Mixing up the news...</div>
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
      { content ? content : <div className="loading-message">Hmm, no stories found. Try searching again.</div> }
    </div>
  );
};

export default Stories;
