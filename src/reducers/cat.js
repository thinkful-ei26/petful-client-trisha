import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  // ADOPT_CAT_REQUEST,
  // ADOPT_CAT_SUCCESS,
  // ADOPT_CAT_ERROR
} from '../actions';

const intitialState = {
  loading: false,
  error: null,
  pet: []
  // pet: {
  //   imageURL:' https://unsplash.com/photos/b079C-_tUbM', 
  //   imageDescription: 'Orange tabby cat yawning',
  //   name: 'Melisandre',
  //   sex: 'Female',
  //   age: 10,
  //   breed: 'Tabby',
  //   story: 'Too sleepy for her own good'
  // }
};

export const catsReducer = (state = intitialState, action) => {
  //return intitialState;

// console.log('state CAT REDUCER',state);
// console.log('action catReducer', action);

  switch (action.type) {
    case FETCH_CAT_REQUEST :
    return Object.assign({}, state, { 
      loading: true, 
      error: null 
    })

    case FETCH_CAT_SUCCESS :
    console.log(state);
    console.log(action);
      return Object.assign({}, state, {
        loading: false, 
        pet: action.pet,
        error: null
      })
    
    case FETCH_CAT_ERROR :
      return Object.assign({}, state, { 
        loading: true,
        error: action.error
      })
    default: return state;
  }
}

export default catsReducer;
// if(action.type ===  ) {
  //   return {
  //     ...state,
  //     loading: true,
  //     error: null
  //   }
  // }
  // if(action.type === ADOPT_CAT_REQUEST) {
  //   return {
  //     ...state,
  //     loading: true,
  //     error: null
  //   }
  // }
  // if(action.type === FETCH_CAT_SUCCESS) {
  //   return {
  //   ...state, 
  //   loading: false,
  //   error: null,
  //   pet: action.pet
  // }
  // } if (action.type === ADOPT_CAT_SUCCESS) {
  //   return {
  //     ...state,
  //     loading: false,
  //     error: null,
  //     pet: null,
  //   }
  // }
  // if(action.type === FETCH_CAT_ERROR) {
  //   return {
  //     ...state,
  //     loading: false,
  //     error: action.error,
  //   }
  // } 
  // if (action.type === ADOPT_CAT_ERROR) {
  //   return {
  //     ...state,
  //     error: action.error
  //   } 
  // }
  // else {
  //   return state;
  // }