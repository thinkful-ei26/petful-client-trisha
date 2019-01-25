import { API_BASE_URL } from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  })
  .then(cat => dispatch(fetchCatSuccess(cat)))
  .catch(err => dispatch(fetchCatError(err)))
}

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
const adoptCatError = error => ({
  type: ADOPT_CAT_ERROR,
  error
});

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE'
  })
  .then(()=>dispatch(adoptCatSuccess()))
  .then(()=>dispatch(fetchCat()))
  .catch(err => dispatch(adoptCatError(err)));
}
