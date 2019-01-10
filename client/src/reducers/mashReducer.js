const mashReducer = (
  state = {
    topic: '',
    words: [],
    recentMashes: [],
    loadingNew: false,
    loadingSaved: false,
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
        loadingNew: true,
        loadingSaved: false,
        saving: false,
        saved: false,
        error: false,
      };
    case 'FETCH_MASH':
      return {
        ...state,
        id: action.payload.id,
        topic: action.payload.topic,
        words: action.payload.words,
        loadingNew: false,
        loadingSaved: false,
      };
    case 'START_FETCH_SAVED_MASH':
      return {
        ...state,
        words: [],
        loadingNew: false,
        loadingSaved: true,
        saving: false,
        saved: false,
        error: false,
      };
    case 'START_SAVE_MASH':
      return {
        ...state,
        saving: true,
        loadingNew: false,
        loadingSaved: false,
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
        loadingNew: false,
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
        loadingNew: false,
        saved: false,
        error: true,
      };
    default:
      return state;
  }
};

export default mashReducer;
