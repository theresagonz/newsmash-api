const mixReducer = (
  state = {
    stories: [],
    loading: false,
  },
  action) => {
  switch (action.type) {
    case 'START_FETCH_MIX':
      return {
        ...state,
        stories: [],
        loading: true,
      };
    case 'FETCH_MIX':
      return {
        ...state,
        stories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default mixReducer;
