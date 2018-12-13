import cuid from 'cuid';
export const cuidFn = cuid;

const headlinesReducer = (state = { headlines: [] }, action) => {
  switch (action.type) {
    case 'FETCH_HEADLINES':
      return { ...state, headlines: action.payload }
    default:
      return state;
  }
}

export default headlinesReducer;
