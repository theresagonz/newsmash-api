import React from 'react';
import Story from './Story';
import { connect } from 'react-redux';

const Stories = props => {
  console.log('props.stories', props.stories)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
        {
          !!props.stories.length && (
            props.stories.map((story, index) => (
              <Story key={index} story={story} />
          )))
        }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return ({ stories: state.stories })
}

export default connect(mapStateToProps)(Stories);
