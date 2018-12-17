import React from 'react';
import Story from './Story';
import { connect } from 'react-redux';

const Stories = props => {
  let stories = !!props.stories.array.length ? props.stories.array : null;
  console.log('stories', stories);

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

// const mapStateToProps = state => {
//   return ({ stories: state.stories })
// }

// export default connect(mapStateToProps)(Stories);
export default Stories;
