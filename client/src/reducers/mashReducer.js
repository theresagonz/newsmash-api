const mashReducer = (
  state = 
  {
    topic: '',
    words: [],
    loading: false,
  },
  action ) => {

    switch (action.type) {
      case 'START_FETCH_MASH':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_MASH':
        return {
          ...state,
          topic: action.topic,
          words: action.payload.words,
          loading: false,
        };
      default:
        return state;
    }
};

export default mashReducer;
