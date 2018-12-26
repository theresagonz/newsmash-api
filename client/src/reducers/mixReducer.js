import cuid from 'cuid';
export const cuidFn = cuid;

const mixReducer = (
  state = {
    data: [],
    loading: false,
  },
  action) => {
  switch (action.type) {
    case 'START_FETCH_MIX':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MIX':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default mixReducer;
