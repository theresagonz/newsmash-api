export const fetchStoriesBySearch = text => {
  // make a fetch request to post search term to back end
  // then dispatch the returned data using thunk middleware
  
  return dispatch => {
    let request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization': sessionStorage.jwt,
        // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(text)
    }
    return fetch('/api/v1/stories', request)
      .then(res => res.json())
      .then(data => dispatch({
        type: 'FETCH_STORIES',
        payload: JSON.stringify(data)
      })
    )
  }
}

export const fetchStories = () => {
  return dispatch => {
    return fetch('/api/v1/stories')
      .then(res => res.json())
      .then(data => dispatch({
        type: 'FETCH_STORIES',
        payload: JSON.stringify(data)
      })
    )
  }
};
