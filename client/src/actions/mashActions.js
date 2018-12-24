export const getMashWords = (text) => {
  console.log('text :', text);
  let request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(text)
  };
  return (dispatch) => {
    dispatch({ type: 'START_GETTING_MASH_DATA_FROM_SERVER' });
    return fetch('/api/v1/mashes', request)
      .then(res => res.json())
      .then(data => {
        console.log('data :', data);
        return dispatch({
          type: 'GET_MASH_DATA_FROM_SERVER',
          payload: data
        });
      })
      .catch(error => console.error(error));
  };
};

export const getTopMashes = () => {
  return (dispatch) => {
    dispatch({ type: 'START_GETTING_MASH_DATA_FROM_SERVER' });
    return fetch('/api/v1/mashes')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'GET_MASH_DATA_FROM_SERVER',
          payload: data
        });
      })
      .catch(error => console.error(error));
  };
};
