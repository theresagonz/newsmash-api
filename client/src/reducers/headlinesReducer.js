import cuid from 'cuid';
export const cuidFn = cuid;

const headlinesReducer = (state = {searchText: ''}, action) => {
  switch (action.type) {
    case 'FETCH_HEADLINES':
      return { searchText: action.payload }
    default:
      return state;
  }
}

export default headlinesReducer;
