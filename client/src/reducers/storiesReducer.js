import cuid from 'cuid';
export const cuidFn = cuid;

const storiesReducer = (state = { stories: [], loading: false }, action) => {
  switch (action.type) {
    case 'START_FETCH_STORIES_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_STORIES':
      return { ...state, loading: false, stories: action.payload }
    default:
      return state;
  }
}

export default storiesReducer;
