import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_ERROR
} from '../actions';

const intitialState = {
  loading: false,
  error: null,
  //pet: null
  pet: {
    imageURL:' https://unsplash.com/photos/b079C-_tUbM', 
    imageDescription: 'Orange tabby cat yawning',
    name: 'Melisandre',
    sex: 'Female',
    age: 10,
    breed: 'Tabby',
    story: 'Too sleepy for her own good'
  }
};

export default function catsReducer(state = intitialState, action) {
  return intitialState;
}