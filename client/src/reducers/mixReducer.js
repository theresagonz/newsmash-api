import cuid from 'cuid';
export const cuidFn = cuid;

const mixReducer = (state = { data: [], loading: false }, action) => {
  // console.log('action', action)
  switch (action.type) {
    case 'START_FETCH_STORIES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_STORIES':
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};

export default mixReducer;
   