export const getMashWords = (text) => {
  console.log('text :', text);
  const request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(text)
  };
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_MASH' });
    return fetch('/api/v1/mashes/data', request)
      .then(res => res.json())
      .then(data => {
        // console.log('data :', data);
        return dispatch({
          type: 'FETCH_MASH',
          topic: text,
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};

export const getTopMashes = () => {
  return (dispatch) => {
    console.log('in getTopMashes')
    dispatch({ type: 'START_FETCH_MASH' });
    return fetch('/api/v1/mashes/data')
      .then(res => res.json())
      .then(data => {
        console.log('in getTopMashes, data :', data);
        dispatch({
          type: 'FETCH_MASH',
          topic: 'top stories',
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};
