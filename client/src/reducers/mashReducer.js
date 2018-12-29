const mashReducer = (
  state = {
    topic: '',
    words: [],
    recentMashes: [],
    loading: false,
    saving: false,
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
      };
    case 'START_SAVE_MASH':
      return {
        ...state,
        saving: true,
      };
    case 'SAVE_MASH':
      const mashContent = {
        topic: action.payload.topic,
        words: action.payload.words
      };
      const mashes = state.recentMashes.length < 5
        ? [...state.recentMashes, mashContent]
        : [...state.recentMashes.slice(1, 6), mashContent];
      return {
        ...state,
        saving: false,
        recentMashes: mashes,
      };
    case 'FETCH_RECENT_MASHES':
      console.log('in reducer, action.payload', action.payload)
      return  {
        ...state,
        recentMashes: action.payload
      }
    default:
      return state;
  }
};

export default mashReducer;