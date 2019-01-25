import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_ERROR
} from '../actions';

const intitialState = {
  loading: false,
  error: null,
  pet: null
  // pet: {
  // imageURL: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
  // imageDescription: 'A very hipster black pug',
  // name: 'Shakespeare',
  // sex: 'Male',
  // age: 4,
  // breed: 'Pug',
  // story: 'Too hipster for his own good'
  // }
};

export default function dogsReducer(state = intitialState, action) {
  //return intitialState;
  
  if (action.type === FETCH_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if (action.type === ADOPT_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if (action.type === FETCH_DOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      pet: action.dog
    }
  } if (action.type === ADOPT_DOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      pet: null,
    }
  }
  if (action.type === FETCH_DOG_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  }
  if (action.type === ADOPT_DOG_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }
  else {
    return state;
  }
}