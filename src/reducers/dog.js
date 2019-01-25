import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_ERROR
} from '../actions/dog';

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

    case ADOPT_DOG_REQUEST :
    return Object.assign({}, state, { 
      loading: true, 
      error: null 
    })

    case ADOPT_DOG_SUCCESS :
    return Object.assign({}, state, {
      loading: false, 
      pet: [],
      error: null
    })
  
    case ADOPT_DOG_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    default: return state;
  }
}

export default dogsReducer;