import { API_BASE_URL } from '../config';
// console.log('API_BASE_URL on dogsReducer:', API_BASE_URL);

/* ========= ASYNC ACTIONS ========== */
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = pet => ({
  type: FETCH_DOG_SUCCESS,
  pet
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/api/dog`, {
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
  .then( pet => dispatch(fetchDogSuccess(pet)))
  .catch(error => dispatch(fetchDogError(error)))
}

/* ========= DELETE ASYNC ACTIONS ========== */
export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
  type: ADOPT_DOG_ERROR,
  error
});

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE'
  })
  .then(()=>dispatch(adoptDogSuccess()))
  .then(()=>dispatch(fetchDog()))
  .catch(err => dispatch(adoptDogError(err)));
}