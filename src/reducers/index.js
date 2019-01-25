import {combineReducers} from 'redux';
import catsReducer from './cat';
// import dogsReducer from './dog';

const rootReducer = combineReducers({
  catsReducer,
  // dogsReducer
});
export default rootReducer;