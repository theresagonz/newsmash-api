const mashReducer = (
  state = {
    topic: '',
    words: [],
    recentMashes: [],
    loading: false,
    saving: false,
    saved: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case 'START_FETCH_MASH':
      return {
        ...state,
        words: [],
        loading: true,
        saving: false,
        saved: false,
        error: false,
      };
    case 'FETCH_MASH':
      return {
        ...state,
        topic: action.payload.topic,
        words: action.payload.words,
        loading: false,
      };
    case 'START_FETCH_SAVED_MASH':
      return {
        ...state,
        topic: action.payload,
        words: [],
        loading: true,
        saving: false,
        saved: false,
        error: false,
      };
    case 'START_SAVE_MASH':
      return {
        ...state,
        saving: true,
        loading: false,
        saved: false,
        error: false,
      };
    case 'SAVE_MASH':
      const mashes =
        state.recentMashes.length < 5
          ? [action.payload, ...state.recentMashes]
          : [action.payload, ...state.recentMashes.slice(0, 9)];
      return {
        ...state,
        saving: false,
        saved: true,
        recentMashes: mashes,
      };
    case 'FETCH_RECENT_MASH_LIST':
      return {
        ...state,
        recentMashes: action.payload,
      };
    case 'START_SET_RECENT_MASH':
      return {
        ...state,
        topic: action.payload,
        loading: false,
        saving: false,
        saved: false,
        error: false,
      };
    case 'SET_RECENT_MASH':
      return {
        ...state,
        words: action.payload,
        error: false,
        saved: true,
      };
    case 'SET_TOPIC':
      return {
        ...state,
        topic: action.payload,
      };
    case 'SET_SAVED':
      return {
        ...state,
        saved: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        saved: false,
        error: true,
      };
    default:
      return state;
  }
};

export default mashReducer;
