const mashReducer = (
  state = 
  {
    words: [],
    sources: [],
    topic: '',
    loading: false
  },
  action ) => {

    switch (action.type) {
      case 'GET_MASH_DATA_FROM_SERVER':
        return { ...state,
          loading: true
        };
      case 'FETCH_STORIES':
        return {
          loading: false,
          mash: action.payload
        };
      default:
        return state;
    }
};

export default mashReducer;