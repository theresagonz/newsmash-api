export const getStoriesAndUpdateStore = () => {
  // returns a function that dispatches an action with data to the redux store
  return dispatch => {
    dispatch({ type: 'START_FETCH_STORIES_REQUEST' });
    return fetch('/api/v1/mixes')
      .then(res => res.json())
      .then(data => {
        return dispatch({
          type: 'FETCH_STORIES',
          payload: data
        });
      })
      .catch(error => console.error('ERROR', error));
  };
};

export const searchStoriesAndUpdateStore = (text) => {
  let request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(text)
  };
  return dispatch => {
    dispatch({ type: 'START_FETCH_STORIES_REQUEST' });
    return fetch('/api/v1/mixes', request)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_STORIES',
          payload: data
        });
      })
      .catch(error => console.error(error));
  };
};
