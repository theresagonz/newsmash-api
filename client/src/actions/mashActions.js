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
        dispatch({
          type: 'FETCH_MASH',
          topic: data.topic,
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};

export const getTopMashes = () => {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_MASH' });
    return fetch('/api/v1/mashes/data')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_MASH',
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};

export const saveMash = (data) => {
  console.log('in saveMash action, data :', data);
  const request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };  
  return (dispatch) => {
    dispatch({ type: 'START_SAVE_MASH'});
    return fetch('/api/v1/mashes', request)
    .then(res => res.json())
    .then(data => {
      console.log('in saveMash, data :', data);
      dispatch({
        type: 'SAVE_MASH',
        payload: data,
      });
    })
    .catch(error => console.error(error));
  };
};

export const getRecentMashes = () => {
  return (dispatch) => {
    return fetch('/api/v1/mashes/recent')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_RECENT_MASH_LIST',
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};

export const getSavedMash = (id) => {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_SAVED_MASH'});
    return fetch(`/api/v1/mashes/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_MASH',
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};

export const setTopic = (topic) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_TOPIC',
      payload: topic,
    });
  };
};
