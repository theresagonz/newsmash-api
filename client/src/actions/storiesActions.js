const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchStoriesBySearch = text => {
  return dispatch => {
    dispatch({ type: 'START_FETCH_STORIES_REQUEST'});
    return fetch(`${baseUrl}/everything?apiKey=${apiKey}&q=${text}`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_STORIES', payload: data.articles }))
  }
}
