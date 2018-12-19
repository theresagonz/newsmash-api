export const getStoriesAndUpdateStore = () => {
// make a fetch request to post search term to back end
  // then dispatch the returned data using thunk middleware to update the store
  // if a 'text' argume nt is passed, send that 

  // let mthd = (text) ? 'POST' : 'GET';
  let request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
     
  return dispatch => {
    console.log('request', request);
    fetch('/api/v1/mixes', request)
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
    fetch('/api/v1/mixes', request)
      .then(res => res.json())
      .then(data => {
        console.log('DAAAATA', data)
        dispatch({
          type: 'FETCH_STORIES',
          payload: data
        });
      })
      .catch(error => console.error(error));
  };
};
