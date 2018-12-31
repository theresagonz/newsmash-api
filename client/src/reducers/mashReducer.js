const mashReducer = (
  state = {
    topic: '',
    words: [],
    recentMashes: [],
    loading: false,
    loadingSaved: false,
  },
  action) => {
  switch (action.type) {
    case 'START_FETCH_MASH':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MASH':
      return {
        ...state,
        topic: action.payload.topic,
        words: action.payload.words,
        loading: false,
        loadingSaved: false,
      };
    case 'START_FETCH_SAVED_MASH':
      return {
        ...state,
        loadingSaved: true,
      };
    case 'SAVE_MASH':
      const mashes = state.recentMashes.length < 5
        ? [action.payload, ...state.recentMashes]
        : [action.payload, ...state.recentMashes.slice(1, 6)];
      return {
        ...state,
        saving: false,
        recentMashes: mashes,
      };
    case 'FETCH_RECENT_MASHES':
      console.log('in reducer, action.payload', action.payload)
      return {
        ...state,
        recentMashes: action.payload
      };
    default:
      return state;
  }
};

export default mashReducer;