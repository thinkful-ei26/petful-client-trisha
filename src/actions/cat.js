import { API_BASE_URL } from '../config';
// console.log('API_BASE_URL on catsReducer:', API_BASE_URL);

/* ========= ASYNC ACTIONS ========== */
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = pet => ({
  type: FETCH_CAT_SUCCESS,
  pet
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/api/cat`, {
    method: 'GET',
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  })
  .then( pet => dispatch(fetchCatSuccess(pet)))
  .catch(error => dispatch(fetchCatError(error)))
}


/* ========= DELETE ASYNC ACTIONS ========== */
export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
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