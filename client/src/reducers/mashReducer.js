const mashReducer = (
  state = 
  {
    words: [],
    loading: false
  },
  action ) => {

    switch (action.type) {
      case 'START_GETTING_MASH_DATA_FROM_SERVER':
        return {
          ...state,
          loading: true
        };
      case 'GET_MASH_DATA_FROM_SERVER':
        return {
          ...state,
          loading: false,
          words: action.payload.words
        };
      default:
        return state;
    }
};

export default mashReducer;