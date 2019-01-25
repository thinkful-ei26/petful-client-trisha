import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  // ADOPT_CAT_REQUEST,
  // ADOPT_CAT_SUCCESS,
  // ADOPT_CAT_ERROR
} from '../actions';

const intitialState = {
  loading: false,
  error: null,
  pet: []
};

export const dogsReducer = (state = intitialState, action) => {

  switch (action.type) {
    case FETCH_DOG_REQUEST :
    return Object.assign({}, state, { 
      loading: true, 
      error: null 
    })

    case FETCH_DOG_SUCCESS :
    // console.log('dogReducer state:', state);
    // console.log('dogReducer action:', action);
      return Object.assign({}, state, {
        loading: false, 
        pet: action.pet,
        error: null
      })
    
    case FETCH_DOG_ERROR :
      return Object.assign({}, state, { 
        loading: true,
        error: action.error
      })
    default: return state;
  }
}

export default dogsReducer;