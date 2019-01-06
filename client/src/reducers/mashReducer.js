const mashReducer = (
  state = {
    topic: '',
    words: [],
    recentMashes: [],
    loadingNew: false,
    loadingSaved: false,
    saving: false,
  },
  action) => {
  switch (action.type) {
    case 'START_FETCH_MASH':
      return {
        ...state,
        loadingNew: true,
        loadingSaved: false,
        saving: false,
      };
    case 'FETCH_MASH':
      return {
        ...state,
        id: action.payload.id,
        topic: action.payload.topic,
        words: action.payload.words,
        createdAt: action.payload.createdAt,
        loadingNew: false,
        loadingSaved: false,
      };
    case 'START_FETCH_SAVED_MASH':
      return {
        ...state,
        loadingSaved: true,
        loadingNew: false,
        saving: false,
      };
    case 'START_SAVE_MASH':
      return {
        ...state,
        saving: true,
        loadingSaved: false,
        loadingNew: false,
      };
    case 'SAVE_MASH':
      const mashes = state.recentMashes.length < 5 ?
        [action.payload, ...state.recentMashes] :
        [action.payload, ...state.recentMashes.slice(1, 6)];
      return {
        ...state,
        saving: false,
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
    default:
      return state;
  }
};

export default mashReducer;