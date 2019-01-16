export const getMashWords = text => {
  const request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  };
  return dispatch => {
    dispatch({ type: 'SET_TOPIC', payload: text });
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
      .catch(error => {
        dispatch({
          type: 'SET_ERROR',
        });
      });
  };
};

export const getTopMash = () => {
  return dispatch => {
    dispatch({ type: 'SET_TOPIC', payload: 'Top stories' });
    dispatch({ type: 'START_FETCH_MASH' });
    return fetch('/api/v1/mashes/data')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_MASH',
          payload: data,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: 'SET_ERROR',
        });
      });
  };
};

export const saveMash = data => {
  const request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return dispatch => {
    dispatch({ type: 'START_SAVE_MASH' });
    return fetch('/api/v1/mashes', request)
      .then(res => (res.ok ? res : new Error(res)))
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'COMPLETE_SAVE' });
        return fetch('/api/v1/mashes/recent')
          .then(res => res.json())
          .then(data => {
            dispatch({
              type: 'FETCH_RECENT_MASH_LIST',
              payload: data,
            });
          })
          .catch(error => console.error(error));
      });
  };
};

export const getRecentMashes = () => {
  return dispatch => {
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

export const getOlderSavedMash = id => {
  return dispatch => {
    dispatch({ type: 'START_FETCH_SAVED_MASH' });
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

export const setRecentMash = mash => {
  return dispatch => {
    dispatch({ type: 'SET_TOPIC', payload: mash.topic });
    dispatch({ type: 'START_SET_RECENT_MASH', payload: mash.topic });
    dispatch({
      type: 'SET_RECENT_MASH',
      payload: mash.words,
    });
  };
};

export const setSaved = () => {
  return dispatch => {
    dispatch({
      type: 'SET_SAVED',
    });
  };
};

export const setError = () => {
  return dispatch => {
    dispatch({
      type: 'SET_ERROR',
    });
  };
};
