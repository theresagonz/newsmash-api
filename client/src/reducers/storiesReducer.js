import cuid from 'cuid';
export const cuidFn = cuid;

const storiesReducer = (state = { array: [], loading: false }, action) => {
  // console.log('action', action)
  switch (action.type) {
    case 'START_FETCH_STORIES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_STORIES':
      return { loading: false, array: action.payload };
    default:
      return state;
  }
};

export default storiesReducer;
   